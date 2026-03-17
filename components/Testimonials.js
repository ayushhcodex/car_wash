'use client';

import { useEffect, useRef } from 'react';
import { Star, Car, MapPin } from 'lucide-react';
import { REVIEWS } from '../lib/data';
import styles from './Testimonials.module.css';

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
          Real reviews from real customers. These are people who&apos;ve experienced our service firsthand.
        </p>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`${styles.card} fade-in`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <StarRating rating={review.rating} />
              <p className={styles.text}>&quot;{review.text}&quot;</p>
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
