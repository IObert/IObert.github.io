import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [discoMode, setDiscoMode] = useState(false);
  const toggleCountRef = useRef(0);
  const toggleTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (discoMode) {
      // Create disco style element
      const style = document.createElement('style');
      style.id = 'disco-mode-styles';
      style.textContent = `
        @keyframes disco-gradient {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes disco-hue-rotate {
          0% { filter: hue-rotate(0deg) saturate(2); }
          100% { filter: hue-rotate(360deg) saturate(2); }
        }
        
        @keyframes disco-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        body.disco-mode {
          animation: disco-hue-rotate 3s linear infinite;
        }
        
        body.disco-mode::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: linear-gradient(
            45deg,
            #ff0080, #ff8c00, #40e0d0, #9b59b6,
            #00ff00, #ff1493, #00bfff, #ffd700,
            #ff0080
          );
          background-size: 400% 400%;
          animation: disco-gradient 4s ease infinite;
          opacity: 0.15;
          pointer-events: none;
        }
        
        .disco-mode .gradient-bg,
        .disco-mode [class*="gradient"] {
          animation: disco-hue-rotate 2s linear infinite;
        }
        
        .disco-mode .glass,
        .disco-mode [class*="card"] {
          animation: disco-pulse 1s ease-in-out infinite;
          backdrop-filter: blur(20px) saturate(180%) hue-rotate(45deg);
        }
        
        .disco-mode header {
          background: linear-gradient(90deg, 
            rgba(255,0,128,0.1), 
            rgba(255,140,0,0.1), 
            rgba(64,224,208,0.1),
            rgba(155,89,182,0.1)
          );
          background-size: 300% 100%;
          animation: disco-gradient 3s ease infinite;
        }
      `;
      document.head.appendChild(style);
      document.body.classList.add('disco-mode');

      // Stop after 10 seconds
      setTimeout(() => {
        setDiscoMode(false);
        document.body.classList.remove('disco-mode');
        const discoStyle = document.getElementById('disco-mode-styles');
        if (discoStyle) {
          discoStyle.remove();
        }
      }, 10000);

      return () => {
        document.body.classList.remove('disco-mode');
        const discoStyle = document.getElementById('disco-mode-styles');
        if (discoStyle) {
          discoStyle.remove();
        }
      };
    }
  }, [discoMode]);

  const toggleTheme = () => {
    // Track rapid toggles
    toggleCountRef.current += 1;
    
    if (toggleTimerRef.current) {
      clearTimeout(toggleTimerRef.current);
    }

    if (toggleCountRef.current === 10) {
      setDiscoMode(true);
      toast({
        title: "🌈 DISCO MODE!",
        description: "Welcome to the hidden experience! 🪩✨",
        duration: 3000,
      });
      toggleCountRef.current = 0;
    } else {
      toggleTimerRef.current = setTimeout(() => {
        toggleCountRef.current = 0;
      }, 5000);
    }

    // Normal theme toggle
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full hover:bg-secondary ${discoMode ? 'animate-spin' : ''}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </Button>
  );
}
