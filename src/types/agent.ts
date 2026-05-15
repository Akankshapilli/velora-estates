export interface Agent {
  id: number;

  name: string;

  role: string;

  image: string;

  experience: string;

  specialization: string;

  phone: string;

  email: string;

  description: string;

  socials: {
    instagram: string;
    linkedin: string;
  };
}
