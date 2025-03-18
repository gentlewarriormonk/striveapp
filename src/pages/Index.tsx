import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Info, LogIn } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState<string>("student");

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isLogin) {
        // Login with email and password
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        console.log("Logged in:", data);
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        // Sign up with email and password
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role
            }
          }
        });
        if (error) throw error;
        if (data.user?.identities?.length === 0) {
          toast.error("This email is already registered. Please log in instead.");
        } else {
          toast.success("Sign up successful! Please check your email for verification.");
        }
      }
    } catch (error: any) {
      console.error("Authentication error:", error);
      toast.error(error.message || "Authentication failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      });
      if (error) throw error;
      // The redirect is handled by Supabase, so we don't need to do anything here
    } catch (error: any) {
      console.error("Google auth error:", error);
      toast.error(error.message || "Google authentication failed");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050a14] p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <img 
            src="./lovable-uploads/Striveapp Logo.png" 
            alt="Strive Logo" 
            className="h-16 w-auto mx-auto" 
            onError={(e) => {
              console.error("Logo failed to load:", e);
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2340a9ff'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='20' text-anchor='middle' fill='white' dominant-baseline='middle'%3EStrive%3C/text%3E%3C/svg%3E";
              e.currentTarget.style.background = '#40a9ff';
              e.currentTarget.style.borderRadius = '8px';
            }}
          />
        </div>

        <h1 className="font-bold text-center text-white mb-3 tracking-tight text-3xl">
          Welcome to Strive
        </h1>
        <p className="text-white/70 text-center mb-8 font-thin">Sign up or log in to track your tasks and start to strive.</p>
        
        {/* Rest of your component remains the same */}
      </div>
    </div>
  );
};

export default Index;
