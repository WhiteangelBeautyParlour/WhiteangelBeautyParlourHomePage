export interface Price {
  label?: string;
  value: number;
}

export interface ServiceItem {
  name: string;
  prices: Price[];
}

export interface Service {
  category: string;
  title: string;
  emoji: string;
  items: ServiceItem[];
}

export const serviceData: Service[] = [
  {
    category: 'Hair Care',
    title: 'Hair Oils & Head Massage',
    emoji: '💆‍♀️',
    items: [
      { name: 'COCONUT OIL', prices: [{ value: 350 }] },
      { name: 'OLIVE OIL', prices: [{ value: 400 }] },
      { name: 'ALMOND OIL', prices: [{ value: 400 }] },
      { name: 'AMARAVATI OIL', prices: [{ value: 400 }] },
      { name: 'MIX OIL', prices: [{ value: 400 }] },
      { name: 'Head Massage', prices: [{ value: 400 }] },
    ]
  },
  {
    category: 'Waxing',
    title: 'Waxing Services',
    emoji: '✨',
    items: [
      { 
        name: 'UNDERARMS', 
        prices: [
          { label: 'B. WAX', value: 100 },
          { label: 'RICA', value: 150 },
          { label: 'CHO', value: 180 }
        ] 
      },
      { 
        name: 'HANDS', 
        prices: [
          { label: 'B. WAX', value: 250 },
          { label: 'RICA', value: 350 },
          { label: 'CHO', value: 500 }
        ] 
      },
      { 
        name: 'HALF LEGS', 
        prices: [
          { label: 'B. WAX', value: 300 },
          { label: 'RICA', value: 450 },
          { label: 'CHO', value: 600 }
        ] 
      },
      { 
        name: 'FULL LEGS', 
        prices: [
          { label: 'B. WAX', value: 600 },
          { label: 'RICA', value: 900 },
          { label: 'CHO', value: 1200 }
        ] 
      },
      { 
        name: 'FULL BODY', 
        prices: [
          { label: 'B. WAX', value: 2200 },
          { label: 'RICA', value: 2500 },
          { label: 'CHO', value: 4000 }
        ] 
      },
      { 
        name: 'HONEY', 
        prices: [
          { value: 1800 },
        ] 
      },
    ]
  },
  {
    category: 'Hair Cuts',
    title: 'Hair Cuts',
    emoji: '✂️',
    items: [
      { name: 'BABY CUT', prices: [{ value: 350 }] },
      { name: 'U CUT', prices: [{ value: 400 }] },
      { name: 'STEP CUT', prices: [{ value: 600 }] },
      { name: 'LAYER', prices: [{ value: 600 }] },
      { name: 'MUTILAYER', prices: [{ value: 900 }] },
    ]
  },
  {
    category: 'Face Care',
    title: 'Face Packs & Bleach',
    emoji: '🧖‍♀️',
    items: [
      { name: 'FACE PACK', prices: [{ value: 200 }] },
      { name: 'NECK', prices: [{ value: 250 }] },
      { name: 'HANDS', prices: [{ value: 300 }] },
      { name: 'LEGS', prices: [{ value: 200 }] },
      { name: 'BLEACH', prices: [{ value: 500 }] },
      { name: 'TAN PACK', prices: [{ value: 700 }] },
    ]
  },
  {
    category: 'Hand & Foot Care',
    title: 'Manicure & Pedicure',
    emoji: '👣',
    items: [
      { 
        name: 'PEDICURE', 
        prices: [
          { label: 'NORMAL', value: 700 },
          { label: 'SPL', value: 800 }
        ] 
      },
      { 
        name: 'MENICURE', 
        prices: [
          { label: 'NORMAL', value: 350 },
          { label: 'SPL', value: 450 }
        ] 
      },
    ]
  },
  {
    category: 'Henna',
    title: 'Henna Services',
    emoji: '🌿',
    items: [
      { name: 'BLACK HENNA', prices: [{ value: 300 }] },
      { name: 'NATURAL HENNA', prices: [{ value: 400 }] },
      { name: 'INDIAN', prices: [{ label: 'Design-based', value: 0 }] },
      { name: 'ARABIC', prices: [{ label: 'Design-based', value: 0 }] },
    ]
  },
  {
    category: 'Facials',
    title: 'Facial Treatments',
    emoji: '✨',
    items: [
      { name: 'MIX FRUIT', prices: [{ value: 700 }] },
      { name: 'PAPAYA', prices: [{ value: 900 }] },
      { name: 'ORANGE', prices: [{ value: 900 }] },
      { name: 'ALOVALA', prices: [{ value: 900 }] },
      { name: 'BANANA', prices: [{ value: 900 }] },
      { name: 'NATURAL FRUIT', prices: [{ value: 950 }] },
      { name: 'D.TAN', prices: [{ value: 1500 }] },
      { name: 'ANTI TAN', prices: [{ value: 1500 }] },
      { name: 'WINE', prices: [{ value: 1200 }] },
      { name: 'PURE WINE', prices: [{ value: 1500 }] },
      { name: 'INSTANT GLOW', prices: [{ value: 1500 }] },
      { name: 'PEARL', prices: [{ value: 1700 }] },
      { name: 'GOLD', prices: [{ value: 2500 }] },
      { name: 'SILVER', prices: [{ value: 2800 }] },
      { name: 'DIAMOND', prices: [{ value: 3000 }] },
      { name: 'SKIN WHITING', prices: [{ value: 3500 }] },
      { name: 'O3+ POWER', prices: [{ value: 4200 }] },
      { name: 'O3+WHITING', prices: [{ value: 4800 }] },
    ]
  },
  {
    category: 'Cleanup',
    title: 'Cleanup Services',
    emoji: '🧼',
    items: [
      { name: 'NORMAL CLEANUP', prices: [{ value: 400 }] },
      { name: 'ALL OTHER TYPES OF CLEANUP', prices: [{ value: 600 }] },
    ]
  },
  {
    category: 'Hair Spa',
    title: 'Hair Spa Treatments',
    emoji: '💆‍♀️',
    items: [
      { name: 'MATRIX', prices: [{ value: 1500 }] },
      { name: 'LOREAL', prices: [{ value: 1800 }] },
    ]
  },
];