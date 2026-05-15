export interface BaseEntity {
  id: number;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface SectionHeader {
  label?: string;
  title: string;
  description?: string;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}
