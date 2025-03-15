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
  const {
    user,
    loading
  } = useAuth();
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
        const {
          data,
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        console.log("Logged in:", data);
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        // Sign up with email and password
        const {
          data,
          error
        } = await supabase.auth.signUp({
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
      const {
        data,
        error
      } = await supabase.auth.signInWithOAuth({
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
  return <div className="min-h-screen flex flex-col items-center justify-center bg-[#050a14] p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <img src="/lovable-uploads/Striveapp Logo.png" alt="Strive Logo" className="h-16 w-auto mx-auto" />
        </div>

        <h1 className="font-bold text-center text-white mb-3 tracking-tight text-3xl">
          Welcome to Strive
        </h1>
        <p className="text-white/70 text-center mb-8 font-thin">Sign up or log in to track your tasks and start to strive.</p>
        
        <div className="bg-strive-navy border border-strive-blue/30 rounded-xl p-6 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && <>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Name</label>
                  <Input type="text" placeholder="Your name" className="bg-white/5 border-white/10 placeholder:text-white/30 text-white" value={name} onChange={e => setName(e.target.value)} required={!isLogin} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Role</label>
                  <select className="w-full h-10 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white appearance-none" value={role} onChange={e => setRole(e.target.value)} required={!isLogin}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </>}
            
            <div className="space-y-2">
              <label className="text-sm text-white/70">Email</label>
              <Input type="email" placeholder="your.email@example.com" className="bg-white/5 border-white/10 placeholder:text-white/30 text-white" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-white/70">Password</label>
              <Input type="password" placeholder="••••••••" className="bg-white/5 border-white/10 placeholder:text-white/30 text-white" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            
            <Button type="submit" className="w-full bg-strive-blue hover:bg-strive-blue/90 text-white flex items-center gap-2" disabled={isSubmitting}>
              <LogIn className="h-4 w-4" />
              {isLogin ? "Log In" : "Sign Up"}
              {isSubmitting && <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 flex items-center justify-center gap-2" onClick={handleGoogleSignIn} disabled={isSubmitting}>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Continue with Google
              {isSubmitting && <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>}
            </Button>
          </div>
          
          <div className="mt-6 text-center">
            <button type="button" className="text-strive-blue hover:text-strive-blue/80 text-sm" onClick={() => setIsLogin(!isLogin)} disabled={isSubmitting}>
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
    </div>;
};
export default Index;