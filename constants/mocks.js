const categories = [
  {
    id: 'a',
    name: 'Plants',
    tags: ['products', 'inspirations'],
    count: 147,
    image: require('../assets/images/illustration_1.png'),
  },
  {
    id: 'b',
    name: 'Seeds',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/images/illustration_2.png'),
  },
  {
    id: 'c',
    name: 'Flowers',
    tags: ['products', 'inspirations', 'shop'],
    count: 14,
    image: require('../assets/images/illustration_3.png'),
  },
  {
    id: 'd',
    name: 'Pots',
    tags: ['products', 'inspirations', 'shop'],
    count: 34,
    image: require('../assets/images/illustration_1.png'),
  },
  {
    id: 'e',
    name: 'Seeds',
    tags: ['products', 'inspirations'],
    count: 53,
    image: require('../assets/images/illustration_2.png'),
  },
  {
    id: 'f',
    name: 'Ferlilizers',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../assets/images/illustration_3.png'),
  },
];

const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In YOUr Bedroom',
    description:
      'Bedrooms devese to ve decorated with lush geenery just other room in the house - but ir ca be tricky to find a plant that thrives here, Low light, high humidy and warn temperatus mean onlu certain houseplants will florish',
    tags: ['Iteriot', '27 m', 'Ideas'],
    gallery: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images and add +3
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ],
  },
];

const profile = {
  name: 'Jhomani',
  avatar: require('../assets/images/avatar.png'),
  location: 'Bolivia',
  email: 'jhomani@work.com',
  budget: 1000,
  monthlyCap: 5000,
  notification: true,
  newsletter: false,
};

const explore = [
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

export { categories, products, explore };
