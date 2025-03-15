
import { Layout } from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-white/70">Manage your account settings</p>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Card className="bg-strive-navy border-strive-blue/30">
          <CardHeader>
            <CardTitle className="text-white">Account Information</CardTitle>
            <CardDescription className="text-white/70">
              View and manage your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="text-white/90">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-strive-blue w-12 h-12 rounded-full flex items-center justify-center">
                  <User className="text-white" />
                </div>
                <div>
                  <p className="font-medium">{user?.user_metadata?.name || 'User'}</p>
                  <p className="text-sm text-white/70">{user?.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-white/70">Role</p>
                  <p className="capitalize">{user?.user_metadata?.role || 'Student'}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Account Created</p>
                  <p>{new Date(user?.created_at || '').toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/5 flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
