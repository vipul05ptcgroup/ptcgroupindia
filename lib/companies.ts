export interface Company {
  id: string
  name: string
  tagline: string
  desc: string
  url: string
  category: string
  stats: string
  color: string
  icon: string
  internal?: boolean
}

export const COMPANIES: Company[] = [
  {
    id: 'ptcgram',
    name: 'PTCGRAM Pvt. Ltd.',
    tagline: 'Leading Chemical Distributor',
    desc: 'Leading distributors & manufacturers of specialty chemicals, solvents, acids and industrial solutions since 2009.',
    url: 'https://ptcgram.com',
    category: 'Chemicals',
    stats: '500+ Products',
    color: '#C8912B',
    icon: '⚗️',
  },
  {
    id: 'ptclogistics',
    name: 'PTC Logistics',
    tagline: 'Pan India Transport & Global Logistics',
    desc: 'Reliable and efficient freight services through Air, Road, and Sea transportation — ensuring safe, timely delivery across India and worldwide.',
    url: 'https://ptclogistics.in',
    category: 'Logistics',
    stats: 'Pan India',
    color: '#2B6CB0',
    icon: '🚛',
  },
  {
    id: 'kedos',
    name: 'Kedos',
    tagline: 'Smart Business Solutions',
    desc: 'Innovative business solutions and technology services tailored for modern enterprises seeking growth and efficiency.',
    url: 'https://kedos.in',
    category: 'Technology',
    stats: 'Next-Gen Tech',
    color: '#38A169',
    icon: '💡',
  },
  {
    id: 'devangorganics',
    name: 'Devang Organics',
    tagline: 'Pure. Natural. Organic.',
    desc: 'Premium organic products sourced and crafted with care for health-conscious consumers and wellness seekers.',
    url: 'https://devangorganics.com',
    category: 'Organics',
    stats: '100% Natural',
    color: '#68A35A',
    icon: '🌿',
  },
  {
    id: 'himalayan-brewery',
    name: 'The Himalayan Brewery',
    tagline: 'Crafted in the Mountains',
    desc: 'Artisan brewery bringing the purity and spirit of the Himalayas into every bottle — crafted for connoisseurs.',
    url: 'https://thehimalayanbrewery.com',
    category: 'Beverages',
    stats: 'Artisan Craft',
    color: '#744210',
    icon: '🍺',
  },
  {
    id: 'himalayan-store',
    name: 'The Himalayan Store',
    tagline: 'Mountain Essentials',
    desc: 'Curated collection of authentic Himalayan goods — foods, wellness products, and lifestyle items from the peaks.',
    url: 'https://thehimalayanstore.shop',
    category: 'Retail',
    stats: 'Curated Collection',
    color: '#B7791F',
    icon: '🏔️',
  },
  {
    id: 'zauracare',
    name: 'Zaura Care',
    tagline: 'Care for You',
    desc: 'Personal care and wellness products designed for modern lifestyles with a natural, holistic touch.',
    url: 'https://zauracare.com',
    category: 'Personal Care',
    stats: 'Wellness First',
    color: '#D53F8C',
    icon: '💆',
  },
  {
    id: 'sspackaging',
    name: 'SS Packaging',
    tagline: 'Packaging Excellence',
    desc: 'High-quality industrial and retail packaging solutions built for durability, compliance and visual appeal.',
    url: 'https://sspackaging.co.in',
    category: 'Packaging',
    stats: 'Industrial Grade',
    color: '#4A5568',
    icon: '📦',
  },
  {
    id: 'ptcgroupindia',
    name: 'PTC Group India',
    tagline: 'The Group Corporate Hub',
    desc: 'Central portal and corporate backbone connecting all PTC Group companies, ventures and partnerships.',
    url: 'https://ptcgroupindia.in',
    category: 'Corporate',
    stats: 'Est. 2009',
    color: '#1A365D',
    icon: '🏢',
  },
  {
    id: 'firebase',
    name: 'Firebase Data Store',
    tagline: 'Group Data Infrastructure',
    desc: 'Internal data infrastructure powering real-time analytics, inventory management and group-wide operations.',
    url: '#',
    category: 'Infrastructure',
    stats: 'Real-time',
    color: '#DD6B20',
    icon: '🔥',
    internal: true,
  },
  {
    id: 'thefuturex',
    name: 'The FutureX',
    tagline: 'Innovation & R&D Lab',
    desc: 'R&D and innovation arm exploring future opportunities across technology, trade and emerging global markets.',
    url: 'https://thefuturex.in',
    category: 'Innovation',
    stats: 'Future-Ready',
    color: '#553C9A',
    icon: '🚀',
  },
  {
    id: 'ilika',
    name: 'Ilika',
    tagline: 'Creative & Design Studio',
    desc: 'Creative and design studio bringing brand stories to life across digital, print and physical mediums.',
    url: 'https://ilika.in',
    category: 'Creative',
    stats: 'Brand Studio',
    color: '#00A3C4',
    icon: '🎨',
  },
]

export const CATEGORIES = ['All', ...Array.from(new Set(COMPANIES.map((c) => c.category)))]

export const GROUP_STATS = [
  { value: '15+', label: 'Years in Business' },
  { value: '12+', label: 'Businesses & Brands' },
  { value: '1000+', label: 'Clients Served' },
  { value: '50+', label: 'Industry Partners' },
]
