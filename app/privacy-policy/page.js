import styles from './page.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.legal}>
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect:</p>
          <ul>
            <li><strong>Personal Information</strong>: Name, phone number, email address</li>
            <li><strong>Vehicle Information</strong>: Car type, model</li>
            <li><strong>Location Information</strong>: Area, pincode for service delivery</li>
            <li><strong>Usage Data</strong>: Pages visited, interaction data, referral source (UTM parameters from ads)</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and schedule car wash services</li>
            <li>To contact you regarding your service request via phone, WhatsApp, or SMS</li>
            <li>To send service reminders and promotional offers (with your consent)</li>
            <li>To improve our services and website experience</li>
            <li>To measure the effectiveness of our advertising campaigns</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Sharing</h2>
          <p>
            We do not sell your personal information to third parties. We may share data with:
          </p>
          <ul>
            <li>Our service technicians (name, phone, location — for service delivery only)</li>
            <li>Analytics platforms (Google Analytics, Meta) — anonymized usage data only</li>
            <li>Supabase (our database provider) — for secure data storage</li>
          </ul>
        </section>

        <section>
          <h2>4. Communication</h2>
          <p>
            By submitting the contact form with consent, you agree to receive service-related
            communications via WhatsApp, SMS, and phone calls. You can opt out at any time by
            contacting us.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information, including
            encrypted data transmission, secure database storage, and access controls.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Correct inaccurate information</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:hello@aquafleet.in">hello@aquafleet.in</a> or call{' '}
            <a href="tel:+919672626676">+91 9672626676</a>.
          </p>
        </section>

        <a href="/" className={styles.backLink}>← Back to Home</a>
      </div>
    </main>
  );
}
