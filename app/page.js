import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Plans from '@/components/Plans';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Plans />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
