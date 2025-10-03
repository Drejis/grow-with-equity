import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const PostProject = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to post a project.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    const { error } = await supabase.from("opportunities").insert({
      startup_id: user.id,
      title: formData.get("title") as string,
      role: formData.get("role") as string,
      description: formData.get("description") as string,
      stipend_amount: parseInt(formData.get("stipend") as string),
      equity_percentage: parseFloat(formData.get("equity") as string),
      duration: formData.get("duration") as string,
      requirements: formData.get("requirements") as string,
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to post project. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: "Your project has been posted.",
      });
      navigate("/opportunities");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-heading">Post a Project</CardTitle>
              <CardDescription>
                Find talented individuals to join your startup with cash + equity compensation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input id="title" name="title" required placeholder="e.g., Marketing Campaign Manager" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" name="role" required placeholder="e.g., Marketing, Development, Design" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    required 
                    rows={5}
                    placeholder="Describe the project, responsibilities, and what success looks like..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stipend">Cash Stipend ($)</Label>
                    <Input 
                      id="stipend" 
                      name="stipend" 
                      type="number" 
                      required 
                      min="0"
                      placeholder="500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="equity">Equity (%)</Label>
                    <Input 
                      id="equity" 
                      name="equity" 
                      type="number" 
                      step="0.01"
                      required 
                      min="0"
                      max="100"
                      placeholder="0.5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" name="duration" placeholder="e.g., 3 months, 6 months" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    name="requirements" 
                    rows={4}
                    placeholder="List skills, experience, or qualifications needed..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Posting..." : "Post Project"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostProject;
