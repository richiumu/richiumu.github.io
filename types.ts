
export interface PortfolioItemType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}
    