interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success";
  size?: "sm" | "md";
}

export function Tag({ children, variant = "default", size = "sm" }: TagProps) {
  const variants = {
    default: "bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
