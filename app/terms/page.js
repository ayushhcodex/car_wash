import styles from './page.module.css';

export default function Terms() {
  return (
    <main className={styles.legal}>
      <div className="container">
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section>
          <h2>1. Service Agreement</h2>
          <p>
            By booking a car wash service with AquaFleet, you agree to these terms.
            Our services are provided at your specified location by our trained technicians.
          </p>
        </section>

        <section>
          <h2>2. Booking & Cancellation</h2>
          <ul>
            <li>Bookings can be made via phone, WhatsApp, or our contact form</li>
            <li>Cancellations must be made at least 2 hours before the scheduled slot</li>
            <li>No cancellation charges for subscriptions (cancel anytime)</li>
          </ul>
        </section>

        <section>
          <h2>3. Service Guarantee</h2>
          <p>
            We stand behind the quality of our work. If you are not satisfied with any wash,
            contact us within 24 hours and we will redo the service free of charge.
          </p>
        </section>

        <section>
          <h2>4. Pricing</h2>
          <ul>
            <li>Prices are based on car type (Hatchback, Sedan, SUV, MUV)</li>
            <li>Additional charges may apply for excessively dirty vehicles or deep cleaning</li>
            <li>Subscription pricing includes 4 washes per month (once weekly)</li>
            <li>Prices are inclusive of all applicable taxes</li>
          </ul>
        </section>

        <section>
          <h2>5. Liability</h2>
          <p>
            While we take utmost care, AquaFleet is not liable for:
          </p>
          <ul>
            <li>Pre-existing damage or scratches on the vehicle</li>
            <li>Items left inside the vehicle</li>
            <li>Damage caused by pre-existing paint or body conditions</li>
          </ul>
          <p>
            Any concerns must be reported to the technician before the service begins.
          </p>
        </section>

        <section>
          <h2>6. Monthly Subscriptions</h2>
          <ul>
            <li>Subscriptions are billed monthly</li>
            <li>Unused washes do not carry over to the next month</li>
            <li>You may cancel your subscription at any time with no penalty</li>
            <li>Rescheduling a weekly wash is allowed with 12 hours notice</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            For any questions about these terms, contact us at{' '}
            <a href="mailto:hello@aquafleet.in">hello@aquafleet.in</a> or call{' '}
            <a href="tel:+919672626676">+91 9672626676</a>.
          </p>
        </section>

        <a href="/" className={styles.backLink}>← Back to Home</a>
      </div>
    </main>
  );
}
