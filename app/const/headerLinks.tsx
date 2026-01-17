export interface HeaderLink {
  link: string;
  label: string;
}

const headerLinks: HeaderLink[] = [
  { link: '/', label: 'home' },
  { link: '/vins', label: 'wines' },
  { link: '/about', label: 'about' },
  { link: '/contact', label: 'contact' },
];

export default headerLinks;