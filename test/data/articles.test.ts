import { describe, it, expect } from 'vitest';
import { articles } from '../../src/data/articles';

describe('Articles Logical Contradictions', () => {
  it('should not allow any TODO values', () => {
    const todos = articles.filter(
      (article: any) => Object.values(article).some((v: any) => typeof v === 'string' && v.trim().toLowerCase() === 'todo')
    );
    expect(todos.length).toBe(0);
  });

  it('should not allow invalid language', () => {
    const validLangs = ['en', 'de'];
    const invalid = articles.filter((article: any) => !validLangs.includes(article.language));
    expect(invalid.length).toBe(0);
  });

  it('should not allow future dates in the past', () => {
    const now = new Date();
    const invalid = articles.filter((article: any) => {
      const d = new Date(article.date);
      return isNaN(d.getTime()) || d.getFullYear() < 2000 || d > new Date('2100-01-01');
    });
    expect(invalid.length).toBe(0);
  });
});
