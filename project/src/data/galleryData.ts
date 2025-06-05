export interface GalleryItem {
  imageUrl: string;
  title: string;
  category: string;
  alt: string;
}

// Using Pexels images as placeholder
export const galleryData: GalleryItem[] = [
  {
    imageUrl: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Facial Treatment",
    category: "Skincare",
    alt: "Woman receiving facial treatment"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Manicure Service",
    category: "Nail Care",
    alt: "Professional manicure"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Hair Styling",
    category: "Hair Care",
    alt: "Professional hair styling"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Massage Therapy",
    category: "Relaxation",
    alt: "Relaxing massage treatment"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3997304/pexels-photo-3997304.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Henna Design",
    category: "Body Art",
    alt: "Beautiful henna design"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Pedicure Service",
    category: "Foot Care",
    alt: "Professional pedicure"
  }
];