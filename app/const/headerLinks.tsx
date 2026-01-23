export interface HeaderLink {
  link: string;
  label: string;
}

const headerLinks: HeaderLink[] = [
  { link: '/', label: 'home' },
  { link: '/vins', label: 'wines' },
  { link: '/vineyard', label: 'vineyard' },
  { link: '/cellar', label: 'cellar' },
  { link: '/about', label: 'about' },
  { link: '/contact', label: 'contact' },
];

export default headerLinks;