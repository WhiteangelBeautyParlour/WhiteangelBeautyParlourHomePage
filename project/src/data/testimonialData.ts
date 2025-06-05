export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  comment: string;
}

export const testimonialData: Testimonial[] = [
  {
    name: "Priya Sharma",
    service: "Facial & Hair Spa",
    rating: 5,
    comment: "The O3+ facial was amazing! My skin feels so refreshed and radiant. The staff was very professional and attentive to my needs."
  },
  {
    name: "Anita Desai",
    service: "Full Body Waxing",
    rating: 5,
    comment: "Best waxing service in town! The Rica wax they use is gentle on the skin and the results last longer. Will definitely come back."
  },
  {
    name: "Meera Patel",
    service: "Bridal Package",
    rating: 5,
    comment: "I got their bridal package for my wedding and couldn't be happier. The makeup, hair, and henna designs were all perfect!"
  },
  {
    name: "Kavita Reddy",
    service: "Manicure & Pedicure",
    rating: 4,
    comment: "The special pedicure was so relaxing and my feet have never looked better. The nail polish selection is great too."
  },
  {
    name: "Sunita Gupta",
    service: "Hair Styling",
    rating: 5,
    comment: "Got a layer cut and it turned out exactly how I wanted. The stylist really understood what I was looking for."
  },
  {
    name: "Neha Singh",
    service: "Summer Package",
    rating: 5,
    comment: "The summer package is such great value! I loved all the services included and will definitely try their other packages."
  }
];