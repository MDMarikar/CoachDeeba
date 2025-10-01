export interface Testimonial {
  quote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  imageId: string;
  excerpt: string;
  content: string;
}

export interface AboutMe {
  name: string;
  bio: string[];
  focusAreas: string[];
  closing: string;
  profileImageId: string;
}
