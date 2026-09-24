# Alif Ibrahim: Portfolio

Personal portfolio and résumé of Alif Ibrahim, a Full Stack Developer and
vocational high school student based in Bogor, Indonesia.

**Live site:** https://personal-site.alifibrahim0825.workers.dev

Built with [Next.js](https://nextjs.org/), [React](https://react.dev/),
[TypeScript](https://www.typescriptlang.org/), and
[Tailwind CSS](https://tailwindcss.com/), deployed to Cloudflare Workers with
[OpenNext](https://opennext.js.org/cloudflare).

## Pages

- `/` Home
- `/about` About
- `/resume` Résumé (experience, education, skills, courses)
- `/contact` Contact

`/projects` exists but is hidden until real projects are added to
`src/data/projects.ts`.

## Where to edit content

| What                              | File                                                    |
| --------------------------------- | ------------------------------------------------------- |
| Name, role, email, city           | `src/data/profile.json`                                 |
| Site URL, description             | `src/lib/utils.ts`                                      |
| Home tagline                      | `src/components/Template/Hero.tsx`                      |
| About page                        | `src/data/about.ts`                                     |
| Experience / Education / Skills   | `src/data/resume/*.ts`                                  |
| Social links                      | `src/data/contact.ts`                                   |
| Projects                          | `src/data/projects.ts`                                  |
| Portrait                          | `public/images/alif.png`                                |

## Commands

```bash
npm ci                # Install dependencies
npm run dev           # Development server (http://localhost:3000)
npm run lint          # Biome checks
npm run type-check    # TypeScript
npm test              # Vitest
npm run preview       # Build and preview on the Workers runtime
npm run deploy        # Build and deploy to Cloudflare
```

## License

MIT. Originally based on the MIT-licensed
[mldangelo/personal-site](https://github.com/mldangelo/personal-site)
template. See [LICENSE](./LICENSE).
