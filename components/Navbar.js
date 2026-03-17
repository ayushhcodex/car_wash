'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';
import { trackEvent } from './Analytics';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Plans', href: '#plans' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+919672626676';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    trackEvent('Contact', { method: 'phone_call', location: 'navbar' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.navInner}`} aria-label="Main navigation">
        <a href="#" className={styles.logo} aria-label="Home">
          <Droplets size={28} className={styles.logoIcon} />
          <span className={styles.logoText}>AquaFleet</span>
        </a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.navCta}>
            <a
              href={`tel:${phone}`}
              className="btn btn-call btn-sm"
              onClick={handleCallClick}
              aria-label="Call us now"
            >
              <Phone size={16} />
              Call Now
            </a>
          </li>
        </ul>

        <div className={styles.mobileActions}>
          <a
            href={`tel:${phone}`}
            className={`btn btn-call btn-sm ${styles.mobileCall}`}
            onClick={handleCallClick}
            aria-label="Call us"
          >
            <Phone size={16} />
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
