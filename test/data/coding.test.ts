import { describe, it, expect } from 'vitest';
import { coding as codingProjects } from '../../src/data/coding';

describe('Coding Projects Logical Contradictions', () => {
  it('should fail if an archived project has a maintainer', () => {
    const contradictions = codingProjects.filter(
      (project: any) => project.status === 'archived' && project.role.includes('maintainer')
    );
    expect(contradictions.length).toBe(0);
  });

  it('should fail if a project has no roles at all', () => {
    const contradictions = codingProjects.filter(
      (project: any) => !Array.isArray(project.role) || project.role.length === 0
    );
    expect(contradictions.length).toBe(0);
  });

  it('should fail if an active project has no creator or maintainer', () => {
    const contradictions = codingProjects.filter(
      (project: any) => project.status === 'active' && !project.role.some((r: string) => r === 'creator' || r === 'maintainer')
    );
    expect(contradictions.length).toBe(0);
  });

  it('should fail if a project has an invalid status or role', () => {
    const validStatuses = ['active', 'archived'];
    const validRoles = ['creator', 'maintainer', 'contributor'];
    const contradictions = codingProjects.filter((project: any) =>
      !validStatuses.includes(project.status) ||
      !Array.isArray(project.role) ||
      project.role.some((r: string) => !validRoles.includes(r))
    );
    expect(contradictions.length).toBe(0);
  });

  it('should fail if a project has a maintainer but no githubUrl', () => {
    const contradictions = codingProjects.filter(
      (project: any) => project.role.includes('maintainer') && (!project.githubUrl || project.githubUrl.trim() === '')
    );
    expect(contradictions.length).toBe(0);
  });

  it('should fail if there are duplicate project titles', () => {
    const titles = codingProjects.map((p: any) => p.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });
});

// Other logical contradictions to consider:
// 1. A project with no roles at all.
// 2. A project with status 'active' but no 'creator' or 'maintainer'.
// 3. A project with an invalid status or role value.
// 4. A project with a maintainer but no githubUrl.
// 5. Duplicate project titles.
