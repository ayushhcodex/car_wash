'use client';

import { useEffect, useRef } from 'react';
import { Home, Leaf, Users, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const REASONS = [
  {
    icon: Home,
    title: 'Doorstep Service',
    description: 'We come to your home, office, or parking. No need to drive anywhere.',
  },
  {
    icon: Users,
    title: 'Trained Technicians',
    description: 'Our 10+ trained staff handle every car with care and attention to detail.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'We use biodegradable, pH-neutral cleaning agents safe for your car and the environment.',
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guarantee',
    description: 'Not happy with the wash? We\'ll redo it for free. No questions asked.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Choose your time slot — morning, afternoon, or evening. We work around your schedule.',
  },
  {
    icon: ThumbsUp,
    title: 'No Commitment',
    description: 'Monthly plans can be cancelled anytime. Try us with a one-time wash first.',
  },
];

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
          We're not just another car wash. Here's what makes us different.
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
