'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Phone, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { trackEvent } from './Analytics';
import styles from './ContactForm.module.css';

const CAR_TYPES = ['Hatchback', 'Sedan', 'SUV', 'MUV'];
const SERVICE_OPTIONS = ['Shampoo Wash', 'Foam Wash', 'Hydrophobic Coating', 'Monthly Plan', 'Not Sure — Need Advice'];

// Serviceable areas — replace with actual areas
const AREAS = [
  'Aundh', 'Baner', 'Kothrud', 'Wakad', 'Hinjewadi',
  'Viman Nagar', 'Kharadi', 'Hadapsar', 'Pimpri', 'Chinchwad',
  'Sector 22', 'MG Road', 'Shivajinagar', 'Deccan', 'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carType: '',
    area: '',
    serviceInterest: '',
    consent: false,
    website: '', // honeypot
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [utmParams, setUtmParams] = useState({});
  const sectionRef = useRef(null);
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+919876543210';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';

  // Capture UTM params on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtmParams({
        utmSource: params.get('utm_source') || '',
        utmMedium: params.get('utm_medium') || '',
        utmCampaign: params.get('utm_campaign') || '',
      });
    }
  }, []);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...utmParams,
          source: utmParams.utmSource || 'website',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        trackEvent('Lead', {
          service: formData.serviceInterest,
          area: formData.area,
          car_type: formData.carType,
        });
        setFormData({
          name: '',
          phone: '',
          carType: '',
          area: '',
          serviceInterest: '',
          consent: false,
          website: '',
        });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try calling us directly.');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className={styles.contact} ref={sectionRef}>
        <div className="container">
          <div className={`${styles.successCard} fade-in visible`}>
            <CheckCircle size={56} className={styles.successIcon} />
            <h3 className={styles.successTitle}>Thank You!</h3>
            <p className={styles.successText}>
              We've received your request. Our team will call you within <strong>30 minutes</strong> during business hours.
            </p>
            <div className={styles.successActions}>
              <a
                href={`https://wa.me/${whatsapp}?text=Hi! I just submitted a form on your website. My name is ${formData.name || 'there'}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <a href={`tel:${phone}`} className="btn btn-secondary">
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
            <button
              className={styles.newRequest}
              onClick={() => setStatus('idle')}
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">
          Get a <span className="accent-text">Free Quote</span>
        </h2>
        <p className="section-subtitle fade-in">
          Fill in your details and we'll call you within 30 minutes with a personalized quote. No spam, no pressure.
        </p>

        <div className={styles.wrapper}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.form} glass-card fade-in`}
            noValidate
          >
            {/* Honeypot — hidden from real users */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  maxLength={100}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  maxLength={15}
                  pattern="[0-9]{10}"
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="carType" className={styles.label}>Car Type</label>
                <select
                  id="carType"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select car type</option>
                  {CAR_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="area" className={styles.label}>
                  Area <span className={styles.required}>*</span>
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select your area</option>
                  {AREAS.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="serviceInterest" className={styles.label}>Service Interested In</label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className={styles.consent}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className={styles.checkbox}
              />
              <label htmlFor="consent" className={styles.consentLabel}>
                I agree to receive updates about my car wash booking via WhatsApp/SMS/Call.
                View our <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>.
              </label>
            </div>

            {status === 'error' && (
              <div className={styles.error} role="alert">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
                <a href={`tel:${phone}`} className={styles.errorCall}>
                  Call us: {phone}
                </a>
              </div>
            )}

            <button
              type="submit"
              className={`btn btn-primary btn-lg ${styles.submitBtn}`}
              disabled={status === 'loading'}
              id="contact-submit-btn"
            >
              {status === 'loading' ? (
                <>
                  <Loader size={18} className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Get Free Quote
                </>
              )}
            </button>
          </form>

          <div className={`${styles.sidebar} fade-in`}>
            <div className={styles.sideCard}>
              <h3>Prefer to talk?</h3>
              <p>Skip the form. Reach us directly.</p>
              <a
                href={`tel:${phone}`}
                className="btn btn-call"
                onClick={() => trackEvent('Contact', { method: 'phone_call', location: 'form_sidebar' })}
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsapp}?text=Hi! I'm interested in your car wash service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={() => trackEvent('Contact', { method: 'whatsapp', location: 'form_sidebar' })}
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            <div className={styles.sideCard}>
              <h3>Business Hours</h3>
              <p>Monday – Saturday</p>
              <p><strong>7:00 AM – 7:00 PM</strong></p>
              <p className={styles.muted}>Sunday: By appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
