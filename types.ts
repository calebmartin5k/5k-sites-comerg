export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string; // HTML string or plain text
  image: string;
  details?: {
    title: string;
    content: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}
