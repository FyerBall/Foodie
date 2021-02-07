import { v4 as uuidv4 } from 'uuid';
// Icons
import hamburger from './assets/hamburger.svg';
import milkshake from './assets/milkshake.svg';
import hotDog from './assets/hot-dog.svg';
import bacon from './assets/bacon.svg';
import vegetarian from './assets/broccoli.svg';
import dessert from './assets/dessert.svg';
import pizza from './assets/pizza.svg';
import sushi from './assets/onigiri.svg';
import taco from './assets/taco.svg';
import noodles from './assets/noodles.svg';

// Food
import Cheeseburger from './assets/Cheeseburger.jpg';
import Salad from './assets/salad.jpg';
import Bacon from './assets/bacon rolls.jpg';
import Dessert from './assets/Dessert.jpg';
import Sandwich from './assets/Grilled cheese sandwich.jpg';
import HotDog from './assets/Hot dog.jpg';
import Milkshake from './assets/milkshake.jpg';
import Noodles from './assets/noodles.jpg';
import Vegetarian from './assets/Vegetarian.jpg';

//  ? TODO  Don't need the following
export const categories = [
  // TODO: DON'T repeat the icons. Go back and download the rest

  {
    id: uuidv4(),
    name: 'Sandwiches',
    icon: hamburger,
  },
  {
    id: uuidv4(),
    name: 'American',
    icon: bacon,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Lunch Specials',
  //   icon: hamburger,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'salads',
  //   icon: hamburger,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'noodles',
  //   icon: hamburger,
  // },
  {
    id: uuidv4(),
    name: 'Dessert',
    icon: dessert,
  },
  {
    id: uuidv4(),
    name: 'hot dog',
    icon: hotDog,
  },
  {
    id: uuidv4(),
    name: 'Vegetarian',
    icon: vegetarian,
  },
  {
    id: uuidv4(),
    name: 'shake',
    icon: milkshake,
  },
  {
    id: uuidv4(),
    name: 'pizza',
    icon: pizza,
  },
  {
    id: uuidv4(),
    name: 'sushi',
    icon: sushi,
  },
  {
    id: uuidv4(),
    name: 'taco',
    icon: taco,
  },
];

export const menu = [
  {
    id: 1,
    title: 'Cheeseburger',
    mainImage: Cheeseburger,
    images: [
      {
        id: 1,
        image: Cheeseburger,
      },
      {
        id: 2,
        image: Sandwich,
      },
      {
        id: 3,
        image: Salad,
      },
    ],
    price: 12,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 4,
    numOfRating: 324,
    category: 'burger',
    icon: hamburger,
    coupon: 2,
    freeDelivery: true,
  },

  {
    id: 2,
    title: 'Greek Salad',
    mainImage: Salad,
    images: [
      {
        id: 1,
        image: Salad,
      },
      {
        id: 2,
        image: Vegetarian,
      },
      {
        id: 3,
        image: Noodles,
      },
    ],
    price: 6,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 4.5,
    numOfRating: 591,
    category: 'salad',
    icon: noodles,
    coupon: 3,
    freeDelivery: false,
    sponsored: true,
  },
  {
    id: 3,
    title: 'Bacon Rolls',
    mainImage: Bacon,
    images: [
      {
        id: 1,
        image: Bacon,
      },
      {
        id: 2,
        image: Milkshake,
      },
      {
        id: 3,
        image: Sandwich,
      },
    ],
    price: 4.99,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: false,
    rating: 3.6,
    numOfRating: 3451,
    category: 'american',
    icon: bacon,
    coupon: 5,
    freeDelivery: true,
  },

  {
    id: 4,
    title: 'Grilled cheese sandwich',
    mainImage: Sandwich,
    images: [
      {
        id: 1,
        image: Sandwich,
      },
      {
        id: 2,
        image: Cheeseburger,
      },
      {
        id: 3,
        image: Milkshake,
      },
    ],
    price: 2.99,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 5,
    numOfRating: 91,
    category: 'sandwich',
    icon: hamburger,
    coupon: 1,
    freeDelivery: false,
  },

  {
    id: 5,
    title: 'Lava Cake',
    mainImage: Dessert,
    images: [
      {
        id: 1,
        image: Dessert,
      },
      {
        id: 2,
        image: Milkshake,
      },
      {
        id: 3,
        image: Vegetarian,
      },
    ],
    price: 1.98,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 4.2,
    numOfRating: 1241,
    category: 'Dessert',
    icon: dessert,
    coupon: 2,
    freeDelivery: true,
  },
  {
    id: 6,
    title: 'Hot Dog',
    mainImage: HotDog,
    images: [
      {
        id: 1,
        image: HotDog,
      },
      {
        id: 2,
        image: Salad,
      },
      {
        id: 3,
        image: Dessert,
      },
    ],
    price: 0.99,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: false,
    rating: 0,
    numOfRating: 0,
    category: 'Hot Dog',
    icon: hotDog,
    coupon: 8,
    freeDelivery: true,
  },

  {
    id: 7,
    title: 'chocolate Milkshake',
    mainImage: Milkshake,
    images: [
      {
        id: 1,
        image: Milkshake,
      },
      {
        id: 2,
        image: Noodles,
      },
      {
        id: 3,
        image: HotDog,
      },
    ],
    price: 7.49,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 4.9,
    numOfRating: 103,
    category: 'Milkshake',
    icon: milkshake,
    coupon: 6,
    freeDelivery: false,
  },
  {
    id: 8,
    title: 'Noodles - small bowl',
    mainImage: Noodles,
    images: [
      {
        id: 1,
        image: Noodles,
      },
      {
        id: 2,
        image: Salad,
      },
      {
        id: 3,
        image: HotDog,
      },
    ],
    price: 3.49,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: false,
    rating: 2.1,
    numOfRating: 4,
    category: 'Noodles',
    icon: noodles,
    coupon: 2,
    freeDelivery: false,
  },
  {
    id: 9,
    title: 'Vegetarian bowl',
    mainImage: Vegetarian,
    images: [
      {
        id: 1,
        image: Vegetarian,
      },
      {
        id: 2,
        image: Cheeseburger,
      },
      {
        id: 3,
        image: Sandwich,
      },
    ],
    price: 9.45,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 5,
    numOfRating: 1,
    category: 'Vegetarian',
    icon: vegetarian,
    coupon: 3,
    freeDelivery: true,
  },
];

export const cart = [
  {
    id: 1,
    title: 'Cheeseburger',
    mainImage: Cheeseburger,
    images: [
      {
        id: 1,
        image: Cheeseburger,
      },
      {
        id: 2,
        image: Sandwich,
      },
      {
        id: 3,
        image: Salad,
      },
    ],
    price: 12,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 4,
    numOfRating: 324,
    category: 'burger',
    icon: hamburger,
    coupon: 2,
    freeDelivery: true,
  },
  {
    id: 9,
    title: 'Vegetarian bowl',
    mainImage: Vegetarian,
    images: [
      {
        id: 1,
        image: Vegetarian,
      },
      {
        id: 2,
        image: Cheeseburger,
      },
      {
        id: 3,
        image: Sandwich,
      },
    ],
    price: 9.45,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    local: true,
    rating: 5,
    numOfRating: 1,
    category: 'Vegetarian',
    icon: vegetarian,
    coupon: 3,
    freeDelivery: true,
  },
];

// TODO: Don't need the following
export const details = [
  {
    // id: uuidv4(),
    id: 2,
    title: 'Salad',
    image: Salad,
    price: 6,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi necessitatibus doloremque nostrum culpa veniam pariatur debitis minus sapiente beatae?',
    // 1 / 5 , 2.5 / 5
    rating: 4.5,
    numOfRating: 591,
  },
];

export const reviews = [
  {
    id: uuidv4(),
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
    title: 'great food!',
    stars: 4,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat voluptates, consequuntur expedita excepturi dignissimos magnam ad quam, ducimus dolores asperiores? Suscipit recusandae velit praesentium nesciunt dolorum reiciendis et at commodi, voluptatibus optio culpa, magni blanditiis aut rerum quibusdam incidunt!',
  },
];
