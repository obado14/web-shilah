export interface PortfolioCard {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  href: string;
  altText: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'email';
  url: string;
  title: string;
}
