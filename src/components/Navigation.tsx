import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { SocialIcons } from "./SocialIcons";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CursorTrail } from "@/components/CursorTrail";
import { toast } from "@/hooks/use-toast";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Speaking", path: "/speaking" },
  { name: "Writing", path: "/writing" },
  { name: "Coding", path: "/coding" },
];

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [cursorTrailEnabled, setCursorTrailEnabled] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (newCount === 3) {
      setCursorTrailEnabled(true);
      toast({
        title: "✨ Cursor Trail Activated!",
        description: "Move your mouse to see the magic",
        duration: 3000,
      });
      setTimeout(() => setLogoClickCount(0), 5000);
    } else if (newCount < 3) {
      setTimeout(() => setLogoClickCount(0), 1000);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CursorTrail enabled={cursorTrailEnabled} />
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          <span className="gradient-text">MO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 select-none">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:contact@iobert.me"
            className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Social + Theme */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:contact@iobert.me"
              className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-border mt-2">
              <SocialIcons />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
