
import striveLogo from "@/assets/strive-logo.png";  // Make sure this matches your uploaded logo path
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Info, LogIn } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050a14] p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <StriveLogo size="lg" />
        </div>
        
        <h1 className="text-4xl font-bold text-center text-white mb-3 tracking-tight">
          Welcome to Strive
        </h1>
        <p className="text-white/70 text-center mb-8">
          Sign up or log in to track your habits and improve your productivity
        </p>
        
        <div className="bg-strive-navy border border-strive-blue/30 rounded-xl p-6 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm text-white/70">Name</label>
                <Input 
                  type="text" 
                  placeholder="Your name" 
                  className="bg-white/5 border-white/10 placeholder:text-white/30 text-white"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm text-white/70">Email</label>
              <Input 
                type="email" 
                placeholder="your.email@example.com" 
                className="bg-white/5 border-white/10 placeholder:text-white/30 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-white/70">Password</label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="bg-white/5 border-white/10 placeholder:text-white/30 text-white"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-strive-blue hover:bg-strive-blue/90 text-white flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <Button 
              variant="outline" 
              className="w-full border-white/10 text-white hover:bg-white/5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Continue with Google
            </Button>
          </div>
          
          <div className="mt-6 text-center">
            <button
              type="button"
              className="text-strive-blue hover:text-strive-blue/80 text-sm"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
          </div>
        </div>
        
        <div className="flex items-center mt-8 p-4 bg-strive-navy border border-strive-blue/30 rounded-xl">
          <Info className="text-strive-blue h-5 w-5 mr-3 flex-shrink-0" />
          <p className="text-sm text-white/70">
            This is a development version of Strive. You can log in with any email/password or use Google Sign-In.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
