export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Living Room Ceiling',
    category: 'Ceiling',
    image: '/images/gallery-1.webp',
    location: 'Kochi'
  },
  {
    id: '2',
    title: 'Luxury Restaurant Interior',
    category: 'Commercial',
    image: '/images/gallery-2.webp',
    location: 'Thrithala'
  },
  {
    id: '3',
    title: 'Minimalist Bedroom Design',
    category: 'Residential',
    image: '/images/gallery-3.webp',
    location: 'Ottapalam'
  },
  {
    id: '4',
    title: 'Corporate Office Partition',
    category: 'Partition',
    image: '/images/gallery-4.webp',
    location: 'Bengaluru'
  },
  {
    id: '5',
    title: 'Boutique POP Moulding',
    category: 'POP',
    image: '/images/gallery-5.webp',
    location: 'Cherpulassery'
  },
  {
    id: '6',
    title: 'Customised Louvres',
    category: 'Custom Interiors',
    image: '/images/gallery-6.webp',
    location: 'Palakkad'
  },
  {
    id: '7',
    title: 'Retail Grid Ceiling',
    category: 'Commercial',
    image: '/images/gallery-7.webp',
    location: 'Kozhikode'
  },
  {
    id: '8',
    title: 'Villa Heat Block Ceiling',
    category: 'Residential',
    image: '/images/gallery-8.webp',
    location: 'Malappuram'
  }
];
