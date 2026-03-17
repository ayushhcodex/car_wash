import {
  Sparkles,
  Waves,
  Shield,
  Clock,
  CheckCircle,
  Check,
  Crown,
  Zap,
  Car,
  Brush,
  Droplets,
  Home,
  Leaf,
  Users,
  ShieldCheck,
  ThumbsUp
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Plans', href: '#plans' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'shampoo',
    icon: Sparkles,
    name: 'Shampoo Wash',
    tagline: 'Everyday Clean',
    description: 'Complete exterior shampoo wash that removes dust, grime, and light stains. Perfect for regular maintenance.',
    includes: ['Exterior shampoo wash', 'Tyre & rim cleaning', 'Window cleaning', 'Dashboard wipe'],
    duration: '30–40 min',
    startingPrice: '₹299',
    image: '/images/services/shampoo.png',
  },
  {
    id: 'foam',
    icon: Waves,
    name: 'Foam Wash',
    tagline: 'Deep Clean',
    description: 'Rich foam treatment that penetrates deep to lift embedded dirt. Interior vacuum & dashboard polish included.',
    includes: ['High-pressure foam wash', 'Interior vacuum', 'Dashboard & console polish', 'Tyre dressing', 'Air freshener'],
    duration: '45–60 min',
    startingPrice: '₹499',
    image: '/images/services/foam.png',
  },
  {
    id: 'hydrophobic',
    icon: Shield,
    name: 'Hydrophobic Coating',
    tagline: 'Premium Protection',
    description: 'Advanced ceramic-grade coating that repels water, dust, and UV damage. Your car stays cleaner, longer.',
    includes: ['Full foam wash', 'Clay bar treatment', 'Hydrophobic spray coating', 'Interior deep clean', 'Engine bay wipe', 'Freshener'],
    duration: '90–120 min',
    startingPrice: '₹999',
    popular: true,
    image: '/images/services/hydrophobic.png',
  },
];

export const PLANS = {
  onetime: [
    {
      name: 'Shampoo Wash',
      prices: { hatchback: 299, sedan: 399, suv: 499 },
      features: ['Exterior shampoo wash', 'Tyre & rim cleaning', 'Window cleaning', 'Dashboard wipe'],
    },
    {
      name: 'Foam Wash',
      prices: { hatchback: 499, sedan: 599, suv: 749 },
      features: ['Full foam treatment', 'Interior vacuum', 'Dashboard polish', 'Tyre dressing', 'Air freshener'],
      popular: true,
    },
    {
      name: 'Hydrophobic Coating',
      prices: { hatchback: 999, sedan: 1299, suv: 1599 },
      features: ['Full foam wash', 'Clay bar treatment', 'Hydrophobic coating', 'Interior deep clean', 'Engine bay wipe'],
    },
  ],
  monthly: [
    {
      name: 'Shampoo Plan',
      prices: { hatchback: 999, sedan: 1299, suv: 1599 },
      features: ['4 shampoo washes/month', 'Weekly scheduled visits', 'Tyre & rim every visit', 'Priority booking'],
      savings: '20%',
    },
    {
      name: 'Foam Plan',
      prices: { hatchback: 1699, sedan: 1999, suv: 2499 },
      features: ['4 foam washes/month', 'Weekly scheduled visits', 'Interior vacuum every visit', 'Dashboard polish', 'Priority booking'],
      popular: true,
      savings: '15%',
    },
    {
      name: 'Premium Plan',
      prices: { hatchback: 2999, sedan: 3499, suv: 4299 },
      features: ['4 foam washes/month', '1 hydrophobic coating/month', 'Weekly scheduled visits', 'Interior deep clean', 'Dedicated technician'],
      savings: '25%',
    },
  ],
};

export const CAR_TYPES = ['hatchback', 'sedan', 'suv'];

export const ONE_TIME_PACKAGES = [
  {
    id: 'shampoo-sedan',
    name: 'Shampoo Wash',
    carType: 'Mini / Sedan',
    icon: Sparkles,
    features: [
      'Shampoo Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'shampoo-suv',
    name: 'Shampoo Wash',
    carType: 'SUV',
    icon: Sparkles,
    features: [
      'Shampoo Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'foam-sedan',
    name: 'Foam Wash',
    carType: 'Mini / Sedan',
    icon: Waves,
    features: [
      'Foam Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'foam-suv',
    name: 'Foam Wash',
    carType: 'SUV',
    icon: Waves,
    features: [
      'Foam Wash',
      'Interior + Exterior Cleaning',
      'Tyre Polish',
      'Dashboard Polish',
    ],
  },
  {
    id: 'hydrophobic-sedan',
    name: 'Super Shine Hydrophobic',
    carType: 'Mini / Sedan',
    icon: Shield,
    popular: true,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'hydrophobic-suv',
    name: 'Super Shine Hydrophobic',
    carType: 'SUV',
    icon: Shield,
    popular: true,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'interior-deep-sedan',
    name: 'Interior Deep Cleaning + Foam Wash',
    carType: 'Mini / Sedan',
    icon: Brush,
    features: [
      'Shine Coating + Foam Wash',
      'Glass & Tyre Polish',
      'Dashboard Polish',
      'Interior Vacuum',
      'AC Vent Cleaning',
    ],
  },
  {
    id: 'interior-deep-suv',
    name: 'Interior Deep Cleaning + Foam Wash',
    carType: 'SUV',
    icon: Brush,
    features: [
      'Shine Coating + Foam Wash',
      'Glass & Tyre Polish',
      'Dashboard Polish',
      'Interior Vacuum',
      'AC Vent Cleaning',
    ],
  },
  {
    id: 'rubbing-sedan',
    name: 'Rubbing + Hybrid Super Shine',
    carType: 'Sedan',
    icon: Droplets,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'rubbing-suv',
    name: 'Rubbing + Hybrid Super Shine',
    carType: 'SUV',
    icon: Droplets,
    features: [
      'Foam Wash',
      'Body Polish',
      'Glass Polish',
      'Dashboard Polish',
      'Tyre Polish',
    ],
  },
  {
    id: 'full-interior-sedan',
    name: 'Exterior + Full Interior',
    carType: 'Sedan',
    icon: Crown,
    premium: true,
    features: [
      'Foam Wash',
      'Dashboard Polish',
      'Tyre Polish',
      'Hybrid Ceramic Coating',
      'Interior Scrubbing',
      'Door Panel Detailing',
      'Free Car Perfume',
    ],
  },
  {
    id: 'full-interior-suv',
    name: 'Exterior + Full Interior',
    carType: 'SUV',
    icon: Crown,
    premium: true,
    features: [
      'Foam Wash',
      'Dashboard Polish',
      'Tyre Polish',
      'Hybrid Ceramic Coating',
      'Interior Scrubbing',
      'Door Panel Detailing',
      'Free Car Perfume',
    ],
  },
];

export const MONTHLY_PACKAGES = [
  {
    id: 'daily-sedan',
    name: 'Daily Cleaning',
    carType: 'Mini / Sedan',
    icon: Car,
    features: [
      'Body Clean',
      'Mat Clean',
      'Mirror Cleaning',
      'Tyre Clean (Cloth)',
    ],
  },
  {
    id: 'daily-suv',
    name: 'Daily Cleaning',
    carType: 'SUV',
    icon: Car,
    features: [
      'Body Clean',
      'Mat Clean',
      'Mirror Cleaning',
      'Tyre Clean (Cloth)',
      'Dashboard Dusting',
    ],
  },
  {
    id: 'premium-plan',
    name: 'Premium Plan',
    carType: 'Mini / SUV',
    icon: Crown,
    popular: true,
    features: [
      '6 Days Cleaning',
      '1 Day Foam Wash Weekly',
      'Glass Cleaning',
      'Tyre Polish',
      'Interior Vacuum',
      'Dashboard Polish',
    ],
  },
];

export const REVIEWS = [
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

export const REASONS = [
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
