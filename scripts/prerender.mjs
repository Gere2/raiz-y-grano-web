// Prerenderiza cada página en HTML estático después de `vite build`.
//
// GitHub Pages solo sirve ficheros: sin esto, cada URL sería el mismo HTML
// vacío (y Google y WhatsApp verían el «Lovable Generated Project» de la web
// anterior). Aquí se genera, para cada ruta de src/routes.ts:
//   - dist/<ruta>/index.html y dist/<ruta>.html (GitHub Pages sirve /carta
//     desde carta.html y /carta/ desde carta/index.html),
//   - páginas de redirección para las URL antiguas,
//   - 404.html, sitemap.xml y el script que traduce los enlaces «/#/…».

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssr = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { render, headTags, redirectPage, sitemap, llmsTxt, PAGES, NOT_FOUND, REDIRECTS, LEGACY_ANCHORS, legacyTarget } = ssr;

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("index.html no tiene los marcadores <!--app-head--> y <!--app-html-->");
}

// Precarga de las dos tipografías de la marca (subconjunto latino), para que
// el titular no salte de Georgia a Playfair al cargar.
const assets = await fs.readdir(path.join(dist, "assets"));
const preloads = assets
  .filter((file) => /^(playfair-display|archivo)-latin-wght-normal-.*\.woff2$/.test(file))
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`);
if (preloads.length !== 2) {
  throw new Error(`Esperaba 2 fuentes que precargar y hay ${preloads.length}: ${assets.filter((f) => f.endsWith(".woff2")).join(", ")}`);
}

// Redirección de la web anterior antes de pintar nada. `legacyTarget` es
// autocontenida (ver src/routes.ts), así que su código se puede copiar tal cual.
const legacyScript = `<script>(function(){try{var t=(${legacyTarget.toString()})(location.hash,${JSON.stringify(
  REDIRECTS,
)},${JSON.stringify(LEGACY_ANCHORS)});if(t)location.replace(t);}catch(e){}})();</script>`;

function page(meta, html) {
  const head = [legacyScript, ...preloads, headTags(meta)].join("\n    ");
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
}

async function write(relPath, content) {
  const file = path.join(dist, relPath);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
}

let count = 0;
for (const meta of PAGES) {
  const html = page(meta, render(meta.path));
  if (meta.path === "/") {
    await write("index.html", html);
  } else {
    const rel = meta.path.slice(1);
    await write(`${rel}/index.html`, html);
    await write(`${rel}.html`, html);
  }
  count += 1;
}

// 404: GitHub Pages la sirve para cualquier ruta que no exista.
await write("404.html", page(NOT_FOUND, render("/esta-pagina-no-existe")));

// URL antiguas y atajos.
for (const [from, to] of Object.entries(REDIRECTS)) {
  const rel = from.slice(1);
  await write(`${rel}/index.html`, redirectPage(to));
  await write(`${rel}.html`, redirectPage(to));
}

const today = new Date().toISOString().slice(0, 10);
await write("sitemap.xml", sitemap(today));
await write("llms.txt", llmsTxt());

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: ${count} páginas, 404, ${Object.keys(REDIRECTS).length} redirecciones, sitemap.xml y llms.txt`);
