import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

describe("Navigation", () => {
  const renderNavigation = () => {
    return render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  };

  it("renders logo", () => {
    renderNavigation();
    expect(screen.getByText("MO")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderNavigation();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Speaking")).toBeInTheDocument();
    expect(screen.getByText("Writing")).toBeInTheDocument();
    expect(screen.getByText("Coding")).toBeInTheDocument();
  });

  it("renders contact link", () => {
    renderNavigation();
    const contactLinks = screen.getAllByText("Contact");
    expect(contactLinks.length).toBeGreaterThan(0);
    expect(contactLinks[0]).toHaveAttribute("href", "mailto:contact@iobert.me");
  });

  it("renders theme toggle button", () => {
    renderNavigation();
    const themeButtons = screen.getAllByLabelText(/switch to (light|dark) mode/i);
    expect(themeButtons.length).toBeGreaterThan(0);
    expect(themeButtons[0]).toBeInTheDocument();
  });
});
