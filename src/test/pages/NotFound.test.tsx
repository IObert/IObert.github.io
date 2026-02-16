import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import NotFound from "@/pages/NotFound";

describe("NotFound Page", () => {
  const renderNotFoundPage = () => {
    return render(
      <HelmetProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </HelmetProvider>
    );
  };

  it("renders 404 heading", () => {
    renderNotFoundPage();
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders error message", () => {
    renderNotFoundPage();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });

  it("renders return home button", () => {
    renderNotFoundPage();
    const homeButton = screen.getByRole("link", { name: /return to home/i });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveAttribute("href", "/");
  });

  it("renders within layout with navigation", () => {
    renderNotFoundPage();
    // Check for navigation elements
    expect(screen.getByText("MO")).toBeInTheDocument(); // Logo
  });
});
