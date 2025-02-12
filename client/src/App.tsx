import { useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Performance from "@/pages/performance";
import IntroAnimation from "@/components/intro-animation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/performance" component={Performance} />
      <Route component={NotFound} />
    </Switch>
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