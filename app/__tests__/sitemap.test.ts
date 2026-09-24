import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/` }),
        expect.objectContaining({ url: `${SITE_URL}/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/contact/` }),
      ]),
    );
  });

  it('does not invent modification dates for static pages', () => {
    expect(sitemap().every((entry) => entry.lastModified === undefined)).toBe(
      true,
    );
  });

  it('only lists pages that exist on this site', () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls.every((url) => url.startsWith(SITE_URL))).toBe(true);
    expect(urls.some((url) => url.includes('/writing/'))).toBe(false);
  });
});
