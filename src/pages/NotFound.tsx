import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found | Marius Obert</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="flex min-h-[60vh] items-center justify-center py-12">
        <Card className="max-w-md mx-auto p-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-6xl font-bold mb-2 gradient-text">404</h1>
            <p className="text-xl text-muted-foreground mb-2">Page Not Found</p>
            <p className="text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
          </div>
          
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
