import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export interface NavLink {
  link: string;
  label: string;
  icon: React.ReactNode;
}

const socialLinks: NavLink[] = [
  { link: 'https://www.instagram.com/vins_voctor/?hl=en', label: 'Instagram', icon: <IconBrandInstagram/>},
  { link: 'https://www.facebook.com/VinsVoctor/', label: 'Facebook', icon: <IconBrandFacebook/>},
];
export default socialLinks;
