import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m a {profile.role} and a vocational high school student at{' '}
            <a
              href="https://smkwikrama.sch.id/"
              className="hero-highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMK Wikrama Bogor
            </a>
            , currently interning at{' '}
            <a
              href="https://www.energyx.co.id/"
              className="hero-highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              EnergyX369
            </a>
            . I enjoy building projects and exploring new technologies,
            especially web development, AI, and cybersecurity.
          </p>

          <div className="hero-cta">
            <Link href="/contact" className="button">
              Contact Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
