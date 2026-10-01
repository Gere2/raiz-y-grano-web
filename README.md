# raizygrano.com

Web de Raíz y Grano: café de especialidad en el campus de la Universidad Francisco de Vitoria.
Es una web informativa; los pedidos, los pagos y el Bono Curso viven en la app,
[app.raizygrano.com](https://app.raizygrano.com).

## Cómo se ve

La misma estética que la app (paleta «Grabado Raíz»): papel `#F5EEE2`, tinta `#27332E`,
bosque `#1F513F`, salvia `#4B6A53` y arcilla `#B5653A`; Playfair Display para titulares y
Archivo para el texto (servidas desde la propia web, sin Google Fonts); los grabados de la
carta impresa en `public/brand/`. El cristal queda para lo que flota (la cabecera y el menú
del móvil) y el contenido va en papel. Los colores están en `tailwind.config.ts` y los
materiales (papel, cristal, botones) en `src/styles.css`.

## Dónde se cambia cada cosa

| Qué | Dónde |
| --- | --- |
| Horario, dirección, correo, enlaces a la app, datos legales | `src/content/site.ts` |
| Productos y precios de la carta | `src/content/carta.ts` |
| Perfil de cada producto para el recomendador (frío o caliente, cafeína, dulzor, sabor) | `src/content/recomendador.ts` |
| Páginas, títulos y descripciones para buscadores, redirecciones | `src/routes.ts` |
| Textos de cada página (castellano, inglés y francés) | `src/pages/*.tsx`, en el objeto `COPY` de cada una |

### Cambiar un precio

1. Cambia el precio en el TPV (es la fuente de verdad).
2. Cámbialo en `src/content/carta.ts` y actualiza `CARTA_UPDATED`.
3. Cambia la misma línea en `TPV_V22` de `src/content/carta.test.ts`.

Si entra un producto nuevo, además necesita su perfil en `src/content/recomendador.ts`: el test
del recomendador falla mientras falte.

`npm test` compara nombre a nombre y precio a precio la carta de la web con la lista del TPV:
si falta un producto, sobra uno o no cuadra un precio, falla. Un precio publicado en la web
es una oferta, así que no conviene que se quede atrás.

## Comandos

```bash
npm install
npm run dev        # desarrollo en http://127.0.0.1:8080
npm test           # carta contra el TPV, rutas antiguas y HTML prerenderizado
npm run build      # dist/ con cada página prerenderizada
npm run preview    # sirve dist/ en http://localhost:4173
```

Para añadir o actualizar dependencias usa npm 11 (`npx npm@11 install …`): npm 10.9 falla con
`Cannot read properties of null (reading 'edgesOut')` al resolver los peers opcionales de vitest 4.
El `npm ci` de npm 10 (el del CI con Node 22) instala bien desde el lockfile.

`npm run build` compila la web y después `scripts/prerender.mjs` genera el HTML de cada
ruta (título, descripción, vista previa para redes y, en la portada, los datos del local
para buscadores), el `404.html`, las redirecciones de las URL antiguas, `sitemap.xml` y
`llms.txt`.

## Enlaces antiguos y códigos QR

La web anterior usaba rutas con almohadilla (`raizygrano.com/#/menu`,
`raizygrano.com/#/p/<ficha>?src=qr`). Siguen funcionando: `legacyTarget` en
`src/routes.ts` las traduce a las nuevas antes de pintar la página. Las fichas de repostería
de 2024 (`/p/<ficha>`) se retiraron porque sus alérgenos podían no coincidir con la
repostería actual; la URL sigue viva y remite a la barra y a `/alergenos`.

## Publicar

La web se sirve con GitHub Pages desde la rama `gh-pages` con el dominio `raizygrano.com`
(el fichero `public/CNAME` va en cada publicación).

```bash
npm run deploy
```

`deploy` comprueba tipos, pasa los tests, construye y sube `dist/` a `gh-pages`.

## Privacidad

La web no usa cookies, analítica ni publicidad, y no carga nada de terceros (las fuentes
están en la propia web y el mapa del campus es un dibujo, no un iframe). Solo guarda en el
navegador el idioma elegido (`ryg_lang`). Si algún día se añade analítica o un formulario,
hay que actualizar antes `src/pages/Legal.tsx` (política de privacidad).
