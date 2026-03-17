import { Droplets, Phone, MessageCircle, MapPin, Mail, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  'Shampoo Wash',
  'Foam Wash',
  'Hydrophobic Coating',
  'Monthly Plans',
];

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+919672626676';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919672626676';
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <Droplets size={24} />
              <span>AquaFleet</span>
            </a>
            <p className={styles.tagline}>
              Your fleet of clean. Premium doorstep car wash with trained
              technicians and eco-friendly products.
            </p>
            <div className={styles.socials}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className={styles.socialLink}
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.links}>
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={16} />
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li>
                <MessageCircle size={16} />
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@aquafleet.in">hello@aquafleet.in</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>Your City, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} AquaFleet. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
