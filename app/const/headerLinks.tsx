//const/links.ts

export interface headerlinks{
  link: string;
  label: string;
}

const headerlinks: headerlinks[] = [
  { link: '/', label: 'Accueil' },
  { link: '/vins', label: 'Les Cuvées' },
  { link: '/about', label: 'Connaître Voctor' },
  { link: '/contact', label: 'Contact' },
];

export default headerlinks;

