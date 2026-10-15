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
          'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image:
          'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3529538_1280.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image:
          'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg',
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
          'https://cdn.pixabay.com/photo/2016/07/22/19/01/lavender-1535852_1280.jpg',
        description: 'Calming scent, often used for relaxation.',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image:
          'https://cdn.pixabay.com/photo/2018/06/11/21/48/jasmine-3469102_1280.jpg',
        description: 'Sweet fragrance, promotes better sleep.',
        cost: 16,
      },
      {
        name: 'Rosemary',
        image:
          'https://cdn.pixabay.com/photo/2019/10/11/07/22/rosemary-4541241_1280.jpg',
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
          'https://cdn.pixabay.com/photo/2022/11/14/18/43/zz-plant-7592268_1280.jpg',
        description: 'Thrives on neglect, very hardy and drought-tolerant.',
        cost: 22,
      },
      {
        name: 'Pothos',
        image:
          'https://cdn.pixabay.com/photo/2020/05/15/13/45/pothos-5173716_1280.jpg',
        description: 'Easy to grow, tolerates low light conditions.',
        cost: 10,
      },
      {
        name: 'Aloe Vera',
        image:
          'https://cdn.pixabay.com/photo/2017/07/15/07/48/aloe-vera-2505381_1280.jpg',
        description: 'Needs little water, soothing gel for skin.',
        cost: 13,
      },
    ],
  },
];

export default plantsData;
