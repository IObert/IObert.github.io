import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("Utils", () => {
  describe("cn (className merger)", () => {
    it("merges multiple class names", () => {
      const result = cn("foo", "bar");
      expect(result).toContain("foo");
      expect(result).toContain("bar");
    });

    it("handles conditional classes", () => {
      const result = cn("base", true && "active", false && "inactive");
      expect(result).toContain("base");
      expect(result).toContain("active");
      expect(result).not.toContain("inactive");
    });

    it("handles undefined and null values", () => {
      const result = cn("base", undefined, null, "valid");
      expect(result).toContain("base");
      expect(result).toContain("valid");
    });

    it("merges tailwind classes correctly", () => {
      // Should keep the last conflicting class
      const result = cn("p-4", "p-8");
      expect(result).toBe("p-8");
    });

    it("handles array of classes", () => {
      const result = cn(["foo", "bar"]);
      expect(result).toContain("foo");
      expect(result).toContain("bar");
    });
  });
});
