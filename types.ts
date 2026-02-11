
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  initials: string;
  rating: number;
}

export interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Modalidade {
  title: string;
  description: string;
  imageUrl: string;
}
