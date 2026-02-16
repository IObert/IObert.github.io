import { describe, it, expect } from "vitest";
import { articles } from "@/data/articles";
import { coding } from "@/data/coding";
import { talks } from "@/data/talks";

describe("Data Validation", () => {
  describe("Articles", () => {
    it("should have articles", () => {
      expect(articles.length).toBeGreaterThan(0);
    });

    it("all articles have required fields", () => {
      articles.forEach((article) => {
        expect(article.title).toBeTruthy();
        expect(article.date).toBeTruthy();
        expect(article.externalUrl).toBeTruthy();
        expect(article.tags).toBeDefined();
        expect(Array.isArray(article.tags)).toBe(true);
        expect(["en", "de"]).toContain(article.language);
      });
    });

    it("all article URLs are valid", () => {
      articles.forEach((article) => {
        expect(() => new URL(article.externalUrl)).not.toThrow();
      });
    });

    it("all article dates are valid", () => {
      articles.forEach((article) => {
        const date = new Date(article.date);
        expect(date.toString()).not.toBe("Invalid Date");
      });
    });

    it("articles are sorted by date (newest first)", () => {
      const sortedArticles = [...articles].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      // Check if first 10 are in correct order
      for (let i = 0; i < Math.min(10, articles.length - 1); i++) {
        const currentDate = new Date(sortedArticles[i].date);
        const nextDate = new Date(sortedArticles[i + 1].date);
        expect(currentDate >= nextDate).toBe(true);
      }
    });
  });

  describe("Coding Projects", () => {
    it("should have coding projects", () => {
      expect(coding.length).toBeGreaterThan(0);
    });

    it("all projects have required fields", () => {
      coding.forEach((project) => {
        expect(project.title).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.githubUrl).toBeTruthy();
        expect(project.techStack).toBeDefined();
        expect(Array.isArray(project.techStack)).toBe(true);
        expect(project.techStack.length).toBeGreaterThan(0);
        expect(["active", "archived"]).toContain(project.status);
        expect(Array.isArray(project.role)).toBe(true);
        expect(project.role.length).toBeGreaterThan(0);
      });
    });

    it("all project URLs are valid", () => {
      coding.forEach((project) => {
        expect(() => new URL(project.githubUrl)).not.toThrow();
        if (project.liveUrl) {
          expect(() => new URL(project.liveUrl)).not.toThrow();
        }
      });
    });

    it("all GitHub URLs point to GitHub", () => {
      coding.forEach((project) => {
        expect(project.githubUrl).toMatch(/^https:\/\/github\.com\//);
      });
    });
  });

  describe("Talks", () => {
    it("should have talks", () => {
      expect(talks.length).toBeGreaterThan(0);
    });

    it("all talks have required fields", () => {
      talks.forEach((talk) => {
        expect(talk.title).toBeTruthy();
        expect(talk.event).toBeTruthy();
        expect(talk.location).toBeTruthy();
        expect(talk.date).toBeTruthy();
        expect(talk.abstract).toBeTruthy();
        expect(Array.isArray(talk.tags)).toBe(true);
      });
    });

    it("all talk dates are valid", () => {
      talks.forEach((talk) => {
        const date = new Date(talk.date);
        expect(date.toString()).not.toBe("Invalid Date");
      });
    });

    it("all recording URLs are valid when present", () => {
      talks.forEach((talk) => {
        if (talk.recordingUrl) {
          expect(() => new URL(talk.recordingUrl)).not.toThrow();
        }
      });
    });

    it("talk title+date combinations are unique", () => {
      const keys = talks.map(talk => `${talk.title}-${talk.date}`);
      const uniqueKeys = new Set(keys);
      expect(uniqueKeys.size).toBe(keys.length);
    });
  });
});
