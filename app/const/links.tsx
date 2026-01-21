export interface NavLink {
  link: string;
  label: string;
}

const links: NavLink[] = [
  { link: '/', label: 'home' },
  { link: '/vins', label: 'wines' },
  { link: '/about', label: 'about' },
  { link: '/vineyard', label: 'vineyard' },
  { link: '/contact', label: 'contact' },
  { link: '/politique-de-confidentialite', label: 'privacy' },
];

export default links;