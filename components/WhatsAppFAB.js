'use client';

import { MessageCircle } from 'lucide-react';
import { trackEvent } from './Analytics';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919672626676';

  const handleClick = () => {
    trackEvent('Contact', { method: 'whatsapp', location: 'fab' });
  };

  return (
    <a
      href={`https://wa.me/${whatsapp}?text=Hi! I'm interested in your car wash service.`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      id="whatsapp-fab"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
