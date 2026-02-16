import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tag } from "@/components/Tag";

describe("Tag Component", () => {
  it("renders children correctly", () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText("Test Tag")).toBeInTheDocument();
  });

  it("applies default variant styling", () => {
    render(<Tag>Default</Tag>);
    const tag = screen.getByText("Default");
    expect(tag).toHaveClass("bg-secondary");
  });

  it("applies primary variant styling", () => {
    render(<Tag variant="primary">Primary</Tag>);
    const tag = screen.getByText("Primary");
    expect(tag).toHaveClass("bg-primary/10", "text-primary");
  });

  it("applies accent variant styling", () => {
    render(<Tag variant="accent">Accent</Tag>);
    const tag = screen.getByText("Accent");
    expect(tag).toHaveClass("bg-accent/10", "text-accent");
  });

  it("applies success variant styling", () => {
    render(<Tag variant="success">Success</Tag>);
    const tag = screen.getByText("Success");
    expect(tag).toHaveClass("bg-success/10", "text-success");
  });

  it("applies small size by default", () => {
    render(<Tag>Small</Tag>);
    const tag = screen.getByText("Small");
    expect(tag).toHaveClass("px-2", "py-0.5", "text-xs");
  });

  it("applies medium size when specified", () => {
    render(<Tag size="md">Medium</Tag>);
    const tag = screen.getByText("Medium");
    expect(tag).toHaveClass("px-3", "py-1", "text-sm");
  });
});
