import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import DesignValidation from "./pages/DesignValidation";
import CostOffers from "./pages/CostOffers";
import ResourcePlanning from "./pages/ResourcePlanning";
import MaterialsManagement from "./pages/MaterialsManagement";
import EvaluationInsights from "./pages/EvaluationInsights";
import EventHistory from "./pages/EventHistory";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/design" element={<DesignValidation />} />
            <Route path="/cost" element={<CostOffers />} />
            <Route path="/resources" element={<ResourcePlanning />} />
            <Route path="/materials" element={<MaterialsManagement />} />
            <Route path="/evaluation" element={<EvaluationInsights />} />
            <Route path="/history" element={<EventHistory />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
