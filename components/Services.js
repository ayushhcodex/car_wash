'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Waves, Shield, Clock, CheckCircle } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'shampoo',
    icon: Sparkles,
    name: 'Shampoo Wash',
    tagline: 'Everyday Clean',
    description: 'Complete exterior shampoo wash that removes dust, grime, and light stains. Perfect for regular maintenance.',
    includes: ['Exterior shampoo wash', 'Tyre & rim cleaning', 'Window cleaning', 'Dashboard wipe'],
    duration: '30–40 min',
    startingPrice: '₹299',
    image: '/images/services/shampoo.png',
  },
  {
    id: 'foam',
    icon: Waves,
    name: 'Foam Wash',
    tagline: 'Deep Clean',
    description: 'Rich foam treatment that penetrates deep to lift embedded dirt. Interior vacuum & dashboard polish included.',
    includes: ['High-pressure foam wash', 'Interior vacuum', 'Dashboard & console polish', 'Tyre dressing', 'Air freshener'],
    duration: '45–60 min',
    startingPrice: '₹499',
    image: '/images/services/foam.png',
  },
  {
    id: 'hydrophobic',
    icon: Shield,
    name: 'Hydrophobic Coating',
    tagline: 'Premium Protection',
    description: 'Advanced ceramic-grade coating that repels water, dust, and UV damage. Your car stays cleaner, longer.',
    includes: ['Full foam wash', 'Clay bar treatment', 'Hydrophobic spray coating', 'Interior deep clean', 'Engine bay wipe', 'Freshener'],
    duration: '90–120 min',
    startingPrice: '₹999',
    popular: true,
    image: '/images/services/hydrophobic.png',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.services} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">
          Our <span className="accent-text">Services</span>
        </h2>
        <p className="section-subtitle fade-in">
          Choose the perfect wash for your car. All services include doorstep
          delivery by trained technicians using eco-friendly products.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`glass-card fade-in ${styles.card} ${service.popular ? styles.popular : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {service.popular && (
                  <span className={styles.badge}>Most Popular</span>
                )}
                
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay} />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.iconWrap}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.name}>{service.name}</h3>
                  <p className={styles.tagline}>{service.tagline}</p>
                  <p className={styles.description}>{service.description}</p>

                  <ul className={styles.includes}>
                    {service.includes.map((item) => (
                      <li key={item}>
                        <CheckCircle size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.footer}>
                    <div className={styles.meta}>
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.from}>Starting from</span>
                      <span className={styles.amount}>{service.startingPrice}</span>
                      <span className={styles.carNote}>* Hatchback price</span>
                    </div>
                  </div>

                  <a href="#contact" className={`btn btn-primary ${styles.cardBtn}`}>
                    Book {service.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.disclaimer}>
          * Prices vary by car type (Hatchback / Sedan / SUV / MUV). Deep
          cleaning for excessively dirty vehicles may incur additional charges.
        </p>
      </div>
    </section>
  );
}
