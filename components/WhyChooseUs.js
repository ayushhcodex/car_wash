'use client';

import { useEffect, useRef } from 'react';
import { REASONS } from '../lib/data';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
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

  return (
    <section id="why-us" className={styles.whyUs} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">
          Why Choose <span className="accent-text">Us</span>
        </h2>
        <p className="section-subtitle fade-in">
          We&apos;re not just another car wash. Here&apos;s what makes us different.
        </p>

        <div className={styles.grid}>
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`${styles.item} fade-in`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.title}>{reason.title}</h3>
                <p className={styles.desc}>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
