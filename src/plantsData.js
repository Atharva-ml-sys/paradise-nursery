// plantsData.js
// Static catalogue of houseplants for Paradise Nursery.
// Plants are grouped into categories; each category has at least some plants
// and the total across categories provides more than six unique plants.
const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image:
          'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80',
        description: 'Produces oxygen at night, improving air quality.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image:
          'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80',
        description: 'Removes mold spores and purifies the air.',
        cost: 18,
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image:
          'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=600&q=80',
        description: 'Calming scent, often used for relaxation.',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image:
          'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=600&q=80',
        description: 'Sweet fragrance, promotes better sleep.',
        cost: 16,
      },
      {
        name: 'Rosemary',
        image:
          'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80',
        description: 'Fresh herb scent, also great for cooking.',
        cost: 14,
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image:
          'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
        description: 'Thrives on neglect, very hardy and drought-tolerant.',
        cost: 22,
      },
      {
        name: 'Pothos',
        image:
          'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80',
        description: 'Easy to grow, tolerates low light conditions.',
        cost: 10,
      },
      {
        name: 'Aloe Vera',
        image:
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
        description: 'Needs little water, soothing gel for skin.',
        cost: 13,
      },
    ],
  },
];

export default plantsData;