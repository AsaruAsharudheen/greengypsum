export interface Testimonial {
  id: string;
  name: string;
  project: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mr. Nafih',
    project: 'Tiffin Table Restaurant, Kaloor, Kochi',
    text: '“Green Gypsum Interiors exceeded my expectations with their incredible ceiling designs. They brought a modern, sleek touch to my restaurant that truly enhanced the dining atmosphere. Their creativity and professionalism are unmatched!”'
  },
  {
    id: '2',
    name: 'Mr. Shihab',
    project: 'House Project, Thrithala Koppam',
    text: '“Green Gypsum Interiors turned my house into a home with their stunning ceiling work. Their attention to detail, timely execution, and ability to bring my vision to life were outstanding. Couldn’t be happier!”'
  },
  {
    id: '3',
    name: 'Mr. Shanu',
    project: 'House Project, Veeramangalam, Cherpulassery',
    text: '“From the first consultation to the final touches, Green Gypsum Interiors impressed me with their dedication and craftsmanship. The ceilings they designed are a true highlight of my house, adding elegance and charm.”'
  }
];
