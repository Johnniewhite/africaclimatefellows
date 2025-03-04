"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <LanguageProvider>
        <div className="relative min-h-screen flex flex-col bg-background text-foreground">
          {children}
        </div>
      </LanguageProvider>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors">
          {children}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
} 