'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Crown, Zap, Sparkles, Waves, Shield, Car, Brush, Droplets } from 'lucide-react';
import styles from './Plans.module.css';

const ONE_TIME_PACKAGES = [
  {
    id: 'shampoo-sedan',
    name: 'Shampoo Wash',
    carType: 'Mini / Sedan',
    icon: Sparkles,
    features: [
      'Shampoo Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'shampoo-suv',
    name: 'Shampoo Wash',
    carType: 'SUV',
    icon: Sparkles,
    features: [
      'Shampoo Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'foam-sedan',
    name: 'Foam Wash',
    carType: 'Mini / Sedan',
    icon: Waves,
    features: [
      'Foam Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'foam-suv',
    name: 'Foam Wash',
    carType: 'SUV',
    icon: Waves,
    features: [
      'Foam Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'hydrophobic-sedan',
    name: 'Super Shine Hydrophobic',
    carType: 'Mini / Sedan',
    icon: Shield,
    popular: true,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'hydrophobic-suv',
    name: 'Super Shine Hydrophobic',
    carType: 'SUV',
    icon: Shield,
    popular: true,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'interior-deep-sedan',
    name: 'Interior Deep Cleaning + Foam Wash',
    carType: 'Mini / Sedan',
    icon: Brush,
    features: [
      'Shine Coating + Foam Wash',
      'Glass & Tyre Polish',
      'Dashboard Polish',
      'Interior Vacuum',
      'AC Vent Cleaning',
    ],
  },
  {
    id: 'interior-deep-suv',
    name: 'Interior Deep Cleaning + Foam Wash',
    carType: 'SUV',
    icon: Brush,
    features: [
      'Shine Coating + Foam Wash',
      'Glass & Tyre Polish',
      'Dashboard Polish',
      'Interior Vacuum',
      'AC Vent Cleaning',
    ],
  },
  {
    id: 'rubbing-sedan',
    name: 'Rubbing + Hybrid Super Shine',
    carType: 'Sedan',
    icon: Droplets,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'rubbing-suv',
    name: 'Rubbing + Hybrid Super Shine',
    carType: 'SUV',
    icon: Droplets,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'full-interior-sedan',
    name: 'Exterior + Full Interior',
    carType: 'Sedan',
    icon: Crown,
    premium: true,
    features: [
      'Foam Wash',
      'Dashboard Polish',
      'Tyre Polish',
      'Hybrid Ceramic Coating',
      'Interior Scrubbing',
      'Door Panel Detailing',
      'Free Car Perfume',
    ],
  },
  {
    id: 'full-interior-suv',
    name: 'Exterior + Full Interior',
    carType: 'SUV',
    icon: Crown,
    premium: true,
    features: [
      'Foam Wash',
      'Dashboard Polish',
      'Tyre Polish',
      'Hybrid Ceramic Coating',
      'Interior Scrubbing',
      'Door Panel Detailing',
      'Free Car Perfume',
    ],
  },
];

const MONTHLY_PACKAGES = [
  {
    id: 'daily-sedan',
    name: 'Daily Cleaning',
    carType: 'Mini / Sedan',
    icon: Car,
    features: [
      'Body Clean',
      'Mat Clean',
      'Mirror Cleaning',
      'Tyre Clean (Cloth)',
    ],
  },
  {
    id: 'daily-suv',
    name: 'Daily Cleaning',
    carType: 'SUV',
    icon: Car,
    features: [
      'Body Clean',
      'Mat Clean',
      'Mirror Cleaning',
      'Tyre Clean (Cloth)',
      'Dashboard Dusting',
    ],
  },
  {
    id: 'premium-plan',
    name: 'Premium Plan',
    carType: 'Mini / SUV',
    icon: Crown,
    popular: true,
    features: [
      '6 Days Cleaning',
      '1 Day Foam Wash Weekly',
      'Glass Cleaning',
      'Tyre Polish',
      'Interior Vacuum',
      'Dashboard Polish',
    ],
  },
];

export default function Plans() {
  const [tab, setTab] = useState('onetime');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );

    // Small delay to let React render new cards before observing
    const timer = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll('.fade-in');
      elements?.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [tab]);

  const packages = tab === 'onetime' ? ONE_TIME_PACKAGES : MONTHLY_PACKAGES;

  return (
    <section id="plans" className={styles.plans} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">
          Our <span className="accent-text">Plans</span>
        </h2>
        <p className="section-subtitle fade-in">
          Choose from our complete range of car wash packages. One-time deep cleans or monthly subscriptions — we've got your car covered.
        </p>

        {/* Toggle */}
        <div className={`${styles.toggle} fade-in`}>
          <button
            className={`${styles.toggleBtn} ${tab === 'onetime' ? styles.active : ''}`}
            onClick={() => setTab('onetime')}
          >
            <Zap size={16} />
            One-Time
          </button>
          <button
            className={`${styles.toggleBtn} ${tab === 'monthly' ? styles.active : ''}`}
            onClick={() => setTab('monthly')}
          >
            <Crown size={16} />
            Monthly
          </button>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid} key={tab}>
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`glass-card fade-in ${styles.card} ${pkg.popular ? styles.popular : ''} ${pkg.premium ? styles.premium : ''}`}
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                {pkg.popular && (
                  <span className={styles.badge}>Popular</span>
                )}
                {pkg.premium && (
                  <span className={`${styles.badge} ${styles.premiumBadge}`}>Premium</span>
                )}

                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className={styles.cardName}>{pkg.name}</h3>
                    <span className={styles.carType}>{pkg.carType}</span>
                  </div>
                </div>

                <ul className={styles.features}>
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <Check size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`btn btn-primary btn-sm ${styles.cardBtn}`}>
                  Book Now
                </a>
              </div>
            );
          })}
        </div>

        <p className={styles.note}>
          Contact us for exact pricing. Prices may vary based on car condition. All packages include doorstep service by trained technicians.
        </p>
      </div>
    </section>
  );
}
