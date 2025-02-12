import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Performance from "@/pages/performance";
import IntroAnimation from "@/components/intro-animation";

// Add base URL support for GitHub Pages
const base = import.meta.env.VITE_BASE_URL || "";

function Router() {
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/performance" component={Performance} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;