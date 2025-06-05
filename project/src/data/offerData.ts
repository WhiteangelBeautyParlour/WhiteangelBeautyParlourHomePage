export interface Offer {
  title: string;
  price: number;
  services: string[];
  accentColor: string;
}

export const offerData: Offer[] = [
  {
    title: "Basic Package",
    price: 599,
    services: [
      "Eyebrows",
      "Full hands wax",
      "Underarms",
      "Cleanup"
    ],
    accentColor: "bg-gradient-to-r from-blue-400 to-indigo-400"
  },
  {
    title: "Standard Package",
    price: 799,
    services: [
      "Eyebrows",
      "Full hands wax",
      "Half-leg wax",
      "Fruit facial"
    ],
    accentColor: "bg-gradient-to-r from-indigo-400 to-purple-400"
  },
  {
    title: "Premium Package",
    price: 999,
    services: [
      "Eyebrows",
      "Full hands wax", 
      "Facial (D.tan)",
      "Head Massage"
    ],
    accentColor: "bg-gradient-to-r from-purple-400 to-pink-400"
  },
  {
    title: "Deluxe Package",
    price: 1299,
    services: [
      "Eyebrows",
      "Pedicure",
      "D.Tan pack",
      "Haircut"
    ],
    accentColor: "bg-gradient-to-r from-pink-400 to-rose-400"
  }
];