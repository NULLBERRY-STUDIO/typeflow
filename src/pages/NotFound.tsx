
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Hexagon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-web3-gradient">
      <div className="text-center p-8 rounded-lg neo-card animate-scale-in max-w-md w-full">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-medium mb-3">
          <Hexagon size={14} className="mr-1.5" />
          <span>Page not found</span>
        </span>
        <h1 className="text-4xl font-bold mb-4 bg-accent-gradient bg-clip-text text-transparent">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-accent text-primary-foreground hover:bg-accent/90 transition-colors focus-ring"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
