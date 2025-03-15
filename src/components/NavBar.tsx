
import { NavLink } from "react-router-dom";
import { StriveLogo } from "@/assets/strive-logo";
import { BookOpen, Home, PlusCircle, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full bg-strive-deep-navy border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <NavLink to="/" className="mr-8">
            <StriveLogo />
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => cn(
                "nav-item",
                isActive && "active"
              )}
            >
              <Home size={18} />
              <span>Dashboard</span>
            </NavLink>
            
            <NavLink 
              to="/habits" 
              className={({ isActive }) => cn(
                "nav-item",
                isActive && "active"
              )}
            >
              <User size={18} />
              <span>Habits</span>
            </NavLink>
            
            <NavLink 
              to="/tasks" 
              className={({ isActive }) => cn(
                "nav-item",
                isActive && "active"
              )}
            >
              <BookOpen size={18} />
              <span>Homework</span>
            </NavLink>
          </nav>
        </div>
        
        <div className="flex items-center">
          {location.pathname !== "/" && (
            <>
              <Button variant="ghost" size="icon" className="mr-2">
                <Settings className="h-5 w-5 text-white/70 hover:text-white" />
              </Button>
              
              <Button variant="outline" className="hidden md:flex text-white border-white/20 hover:bg-white/5">
                Log Out
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-strive-deep-navy border-t border-white/5 z-50">
        <div className="flex items-center justify-around">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => cn(
              "flex flex-col items-center py-3 px-5",
              isActive ? "text-strive-blue" : "text-white/70"
            )}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </NavLink>
          
          <NavLink 
            to="/habits" 
            className={({ isActive }) => cn(
              "flex flex-col items-center py-3 px-5",
              isActive ? "text-strive-blue" : "text-white/70"
            )}
          >
            <User size={20} />
            <span className="text-xs mt-1">Habits</span>
          </NavLink>
          
          <div className="relative -mt-5">
            <Button size="icon" className="h-14 w-14 rounded-full bg-strive-blue text-white hover:bg-strive-blue/90">
              <PlusCircle className="h-7 w-7" />
            </Button>
          </div>
          
          <NavLink 
            to="/tasks" 
            className={({ isActive }) => cn(
              "flex flex-col items-center py-3 px-5",
              isActive ? "text-strive-blue" : "text-white/70"
            )}
          >
            <BookOpen size={20} />
            <span className="text-xs mt-1">Homework</span>
          </NavLink>
          
          <NavLink 
            to="/profile" 
            className={({ isActive }) => cn(
              "flex flex-col items-center py-3 px-5",
              isActive ? "text-strive-blue" : "text-white/70"
            )}
          >
            <Settings size={20} />
            <span className="text-xs mt-1">Settings</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
