'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Crown, Zap } from 'lucide-react';
import { PLANS, CAR_TYPES } from '../lib/data';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [tab, setTab] = useState('monthly');
  const [carType, setCarType] = useState('hatchback');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentPlans = PLANS[tab];

  return (
    <section id="pricing" className={styles.pricing} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">
          Simple, <span className="accent-text">Transparent Pricing</span>
        </h2>
        <p className="section-subtitle fade-in">
          No hidden charges. Pick your plan, choose your car type, and we&apos;ll be at your doorstep.
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
            <span className={styles.saveBadge}>Save up to 25%</span>
          </button>
        </div>

        {/* Car Type Selector */}
        <div className={`${styles.carSelector} fade-in`}>
          {CAR_TYPES.map((type) => (
            <button
              key={type}
              className={`${styles.carBtn} ${carType === type ? styles.carActive : ''}`}
              onClick={() => setCarType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className={styles.grid}>
          {currentPlans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card fade-in ${styles.card} ${plan.popular ? styles.popular : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.popular && (
                <span className={styles.popularBadge}>Best Value</span>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceWrap}>
                <span className={styles.rupee}>₹</span>
                <span className={styles.amount}>
                  {plan.prices[carType].toLocaleString('en-IN')}
                </span>
                <span className={styles.period}>
                  {tab === 'monthly' ? '/month' : '/wash'}
                </span>
              </div>
              {plan.savings && (
                <span className={styles.savings}>Save {plan.savings} vs one-time</span>
              )}
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} ${styles.planBtn}`}
              >
                {tab === 'monthly' ? 'Subscribe Now' : 'Book Now'}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          MUV and luxury vehicles: contact us for custom pricing. All prices inclusive of
          taxes. Subscription can be cancelled anytime.
        </p>
      </div>
    </section>
  );
}
