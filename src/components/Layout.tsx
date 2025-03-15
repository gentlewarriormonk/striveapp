
import { cn } from "@/lib/utils";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-strive-navy flex flex-col">
      <NavBar />
      <main className={cn("flex-1 container px-4 py-6 mx-auto max-w-7xl animate-fade-in", className)}>
        {children}
      </main>
    </div>
  );
};
