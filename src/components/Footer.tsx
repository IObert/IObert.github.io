import { SocialIcons } from "./SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Marius Obert. All rights reserved.
        </p>
        <SocialIcons iconSize={18} />
      </div>
    </footer>
  );
}
