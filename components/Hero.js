'use client';

import { Phone, MessageCircle, ChevronRight, Car, MapPin, Star } from 'lucide-react';
import { trackEvent } from './Analytics';
import styles from './Hero.module.css';

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+919672626676';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919672626676';

  const handleCall = () => {
    trackEvent('Contact', { method: 'phone_call', location: 'hero' });
  };

  const handleWhatsApp = () => {
    trackEvent('Contact', { method: 'whatsapp', location: 'hero' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <Star size={14} />
          <span>Your fleet of clean, at your doorstep</span>
        </div>

        <h1 className={styles.title}>
          Premium Car Wash
          <br />
          <span className="accent-text">We Come To You</span>
        </h1>

        <p className={styles.subtitle}>
          AquaFleet brings showroom-quality cleaning to your parking spot.
          Trained technicians, eco-friendly products, and a satisfaction guarantee —
          because your car deserves better than a roadside wash.
        </p>

        <div className={styles.ctas}>
          <a
            href={`tel:${phone}`}
            className="btn btn-call btn-lg"
            onClick={handleCall}
            aria-label="Call us to book a wash"
            id="hero-call-btn"
          >
            <Phone size={18} />
            Call Now — Free Quote
          </a>
          <a
            href={`https://wa.me/${whatsapp}?text=Hi! I'm interested in your car wash service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            onClick={handleWhatsApp}
            aria-label="Chat with us on WhatsApp"
            id="hero-whatsapp-btn"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        <a href="#contact" className={styles.formLink}>
          Or fill our quick form <ChevronRight size={16} />
        </a>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <Car size={20} className="accent-text" />
            <div>
              <strong>500+</strong>
              <span>Cars Washed</span>
            </div>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <MapPin size={20} className="accent-text" />
            <div>
              <strong>10+</strong>
              <span>Areas Served</span>
            </div>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <Star size={20} className="accent-text" />
            <div>
              <strong>4.8★</strong>
              <span>Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
