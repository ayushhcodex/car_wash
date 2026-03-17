import { Inter, Outfit } from 'next/font/google';
import Analytics from '@/components/Analytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'AquaFleet — Premium Doorstep Car Wash Service | We Come To You',
  description:
    'Professional car wash at your doorstep. Shampoo wash, foam wash, and hydrophobic coating by trained technicians. Book now for a free quote. Monthly plans available.',
  keywords: [
    'car wash',
    'doorstep car wash',
    'car wash service',
    'car cleaning',
    'foam wash',
    'hydrophobic coating',
    'car wash subscription',
    'monthly car wash',
  ],
  openGraph: {
    title: 'AquaFleet — Premium Doorstep Car Wash Service | We Come To You',
    description:
      'Professional car wash at your doorstep. Trained technicians, eco-friendly products, satisfaction guaranteed.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AquaFleet',
  description:
    'Premium doorstep car wash service with trained technicians and eco-friendly products.',
  url: 'https://aquafleet.in',
  telephone: '+919672626676',
  priceRange: '₹299 - ₹4299',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '19:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car Wash Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shampoo Wash',
          description: 'Complete exterior shampoo wash with tyre and window cleaning.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Foam Wash',
          description: 'Deep foam treatment with interior vacuum and dashboard polish.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hydrophobic Coating',
          description: 'Premium protective coating that repels water, dust, and UV damage.',
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030712" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
