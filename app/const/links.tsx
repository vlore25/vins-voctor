//const/links.ts

export interface NavLink {
  link: string;
  label: string;
}

const links: NavLink[] = [
  { link: '/', label: 'Accueil' },
  { link: '/vins', label: 'Les Cuvées' },
  { link: '/vigne', label: 'La vigne' },
  { link: '/about', label: 'Connaître Voctor' },
  { link: '/contact', label: 'Contact' },
];

export default links;

