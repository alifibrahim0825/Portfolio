import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Alif Ibrahim');
  });

  it('describes the current school and internship', () => {
    const { container } = render(<Hero />);

    const schoolLink = screen.getByRole('link', { name: /smk wikrama bogor/i });
    expect(schoolLink).toHaveAttribute('href', 'https://smkwikrama.sch.id/');
    expect(schoolLink).toHaveClass('hero-highlight');

    const employerLink = screen.getByRole('link', { name: /energyx369/i });
    expect(employerLink).toHaveAttribute('href', 'https://www.energyx.co.id/');
    expect(employerLink).toHaveClass('hero-highlight');

    const tagline = container.querySelector('.hero-tagline');
    expect(tagline).toHaveTextContent('Full Stack Developer');
    expect(tagline).not.toHaveTextContent(/openai|promptfoo/i);
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('YC Alum')).not.toBeInTheDocument();
    expect(screen.queryByText('Stanford ICME')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const contactButton = screen.getByRole('link', { name: /contact me/i });
    expect(contactButton).toHaveAttribute('href', '/contact');
    expect(contactButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
