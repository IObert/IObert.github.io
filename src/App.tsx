import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useMidnightMode, displayConsoleArt } from "@/hooks/useEasterEggs";
import { useEffect } from "react";
import Home from "./pages/Home";
import Speaking from "./pages/Speaking";
import Writing from "./pages/Writing";
import Coding from "./pages/Coding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  useMidnightMode();

  useEffect(() => {
    // Display console art on mount
    displayConsoleArt();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/coding" element={<Coding />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
