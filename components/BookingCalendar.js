'use client';

import { useState, useMemo } from 'react';
import { Calendar, Clock } from 'lucide-react';
import styles from './BookingCalendar.module.css';

const TIME_SLOTS = [
  '08:00 AM',
  '10:00 AM',
  '12:00 PM',
  '02:00 PM',
  '04:00 PM',
  '06:00 PM'
];

export default function BookingCalendar({ selectedDate, onDateChange, selectedTime, onTimeChange, error }) {
  // Get today's date in YYYY-MM-DD format for min attribute
  const today = useMemo(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split('T')[0];
  }, []);

  // Get date 30 days from now for max attribute
  const maxDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split('T')[0];
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Preferred Time & Date</h3>
      <p className={styles.subtitle}>Select when you&apos;d like us to wash your car</p>

      <div className={styles.dateSelector}>
        <label htmlFor="booking-date" className={styles.label}>
          <Calendar size={16} /> Date
        </label>
        <input
          type="date"
          id="booking-date"
          name="bookingDate"
          required
          min={today}
          max={maxDate}
          value={selectedDate}
          onChange={(e) => {
            onDateChange(e.target.value);
            // Reset time if it's today and the selected time has passed (simplified logic)
          }}
          className={`${styles.dateInput} ${error && !selectedDate ? styles.errorBorder : ''}`}
        />
      </div>

      <div className={styles.timeSelector}>
        <label className={styles.label}>
          <Clock size={16} /> Time Slot
        </label>
        <div className={styles.slotGrid}>
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => onTimeChange(slot)}
              className={`${styles.slotBtn} ${selectedTime === slot ? styles.selected : ''} ${error && !selectedTime ? styles.errorBorder : ''}`}
              aria-pressed={selectedTime === slot}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      
      {error && (!selectedDate || !selectedTime) && (
        <span className={styles.errorText}>Please select both a date and a time slot.</span>
      )}
    </div>
  );
}
