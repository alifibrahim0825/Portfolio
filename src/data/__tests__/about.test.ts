import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a non-empty string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it.each([
    '# Intro',
    '# Some History',
    '# I Like',
    '# Travel / Location',
    '# Fun Facts',
    '# I Dream Of',
  ])('contains the "%s" section exactly once', (heading) => {
    const matches = aboutMarkdown
      .split('\n')
      .filter((line) => line === heading);
    expect(matches).toHaveLength(1);
  });

  it('mentions the current internship and location', () => {
    expect(aboutMarkdown).toContain('EnergyX369');
    expect(aboutMarkdown).toContain('Bogor, Indonesia');
  });

  it('has no leftover template content', () => {
    expect(aboutMarkdown).not.toMatch(
      /OpenAI|Promptfoo|MS-DOS|Buffalo|commit history|afraid to share/,
    );
  });
});
