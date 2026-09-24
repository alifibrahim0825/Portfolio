export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

/**
 * Add your own projects here, then add a `Projects` entry to
 * `src/data/routes.ts` and `app/sitemap.ts` to publish the page.
 *
 * Example:
 * {
 *   title: 'Company Profile Website',
 *   subtitle: 'Client project',
 *   link: 'https://example.com',
 *   image: '/images/projects/example.jpg', // 600x400
 *   date: '2025-01-15',
 *   desc: 'What it does and what problem it solves.',
 *   tech: ['Next.js', 'Laravel', 'PostgreSQL'],
 *   featured: true,
 * }
 */
const data: Project[] = [];

export default data;
