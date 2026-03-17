'use client';

import { useEffect, useRef } from 'react';
import { Star, Car, MapPin } from 'lucide-react';
import styles from './Testimonials.module.css';

// Replace with real customer reviews once available
const REVIEWS = [
  {
    name: 'Rajesh K.',
    car: 'Maruti Swift',
    area: 'Sector 22',
    rating: 5,
    text: 'Great service! They came on time, the foam wash was thorough, and my car looked brand new. Already subscribed to the monthly plan.',
  },
  {
    name: 'Priya M.',
    car: 'Hyundai Creta',
    area: 'MG Road',
    rating: 5,
    text: 'The hydrophobic coating was totally worth it. Two weeks later and my car still repels dust. Excellent work by the team.',
  },
  {
    name: 'Amit S.',
    car: 'Honda City',
    area: 'Aundh',
    rating: 4,
    text: 'Very convenient doorstep service. The technician was polite and professional. Only thing I\'d suggest is offering an early morning slot.',
  },
  {
    name: 'Sneha D.',
    car: 'Tata Nexon',
    area: 'Baner',
    rating: 5,
    text: 'Been using their monthly foam plan for 3 months now. Consistent quality every single time. Highly recommend!',
  },
  {
    name: 'Vikram P.',
    car: 'Mahindra XUV700',
    area: 'Wakad',
    rating: 5,
    text: 'My XUV is a big car and they didn\'t rush through it. Every corner was cleaned. The interior vacuum was especially impressive.',
  },
  {
    name: 'Neha R.',
    car: 'Maruti Baleno',
    area: 'Kothrud',
    rating: 4,
    text: 'Good value for money. The shampoo wash at their price point is unbeatable. Will definitely continue as a monthly subscriber.',
  },
];

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? styles.starFilled : styles.starEmpty}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section id="testimonials" className={styles.testimonials} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">
          What Our <span className="accent-text">Customers Say</span>
        </h2>
        <p className="section-subtitle fade-in">
          Real reviews from real customers. These are people who've experienced our service firsthand.
        </p>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`${styles.card} fade-in`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <StarRating rating={review.rating} />
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <div className={styles.meta}>
                    <span><Car size={12} /> {review.car}</span>
                    <span><MapPin size={12} /> {review.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
