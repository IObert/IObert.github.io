import { Github, Twitter, Linkedin, BookOpen } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/IObert/",
    icon: Github,
  },
  {
    name: "X",
    url: "https://x.com/IObert_/",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mariusobert/",
    icon: Linkedin,
  },
];

export function SocialIcons({ className = "", iconSize = 20 }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-secondary"
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
