import { describe, it, expect } from 'vitest';
import { talks } from '../../src/data/talks';

describe('Talks Logical Contradictions', () => {
  it('should not allow any TODO values', () => {
    const todos = talks.filter(
      (talk: any) => Object.values(talk).some((v: any) => typeof v === 'string' && v.trim().toLowerCase() === 'todo')
    );
    expect(todos.length).toBe(0);
  });

  it('should not allow empty abstracts', () => {
    const empties = talks.filter((talk: any) => !talk.abstract || talk.abstract.trim() === '');
    expect(empties.length).toBe(0);
});

  it('should not allow invalid language', () => {
    const validLangs = ['en', 'de'];
    const invalid = talks.filter((talk: any) => !validLangs.includes(talk.language));
    expect(invalid.length).toBe(0);
  });

  it('should not allow future dates in the past', () => {
    const now = new Date();
    const invalid = talks.filter((talk: any) => {
      const d = new Date(talk.date);
      return isNaN(d.getTime()) || d.getFullYear() < 2000 || d > new Date('2100-01-01');
    });
    expect(invalid.length).toBe(0);
  });
});
