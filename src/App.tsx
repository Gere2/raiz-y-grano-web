
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import OriginPage from "./pages/OriginPage";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import QrCatalogPage from "./pages/QrCatalogPage";
import CombosPage from "./pages/CombosPage";
import RecurrentesPage from "./pages/RecurrentesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/origen" element={<OriginPage />} />
          <Route path="/p" element={<ProductCatalogPage />} />
          <Route path="/p/:slug" element={<ProductDetailPage />} />
          <Route path="/qr" element={<QrCatalogPage />} />
          <Route path="/combos" element={<CombosPage />} />
          <Route path="/recurrentes" element={<RecurrentesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
