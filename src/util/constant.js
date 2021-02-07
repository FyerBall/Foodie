import React from 'react';
import { GiPartyPopper as Party } from 'react-icons/gi';
import { FaCaravan as Car } from 'react-icons/fa';
import { CgShoppingBag as Bag } from 'react-icons/cg';
import { FaFacebook, FaTwitterSquare, FaTwitch } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    name: 'home',
    url: '/',
  },
  {
    id: 2,
    name: 'about',
    url: '/about',
  },
  {
    id: 3,
    name: 'products',
    url: '/products',
  },
  {
    id: 4,
    name: 'contact us',
    url: '/contact-us',
  },

  // TODO:   Checkout & AddProduct is after the user signed in, cart in on its own for now
];

export const footerLinks = [
  {
    id: 1,
    name: 'home',
    url: '/',
  },
  {
    id: 2,
    name: 'about',
    url: '/about',
  },
  {
    id: 3,
    name: 'contact',
    url: '/contact',
  },
  {
    id: 4,
    name: 'help',
    url: '/help',
  },
  {
    id: 5,
    name: 'order history',
    url: '/',
  },
  {
    id: 6,
    name: 'be a partner restaurant',
    url: '/',
  },
  {
    id: 7,
    name: 'FAQs',
    url: '/faq',
  },
];

export const features = [
  {
    id: 1,
    title: 'Delivery',
    info: 'Free delivery',
    secondaryText: '$35 order min.',
    icon: <Car />,
  },
  {
    id: 2,
    title: 'Pick up',
    info: 'Order ahead and pick it up',
    secondaryText: '',
    icon: <Bag />,
  },
  {
    id: 3,
    title: 'Catering',
    info: 'We cater any event',
    secondaryText: '',
    icon: <Party />,
  },
];

export const social = [
  {
    id: 1,
    name: 'facebook',
    url: 'facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    name: 'twitter',
    url: 'twitter.com',
    icon: <FaTwitterSquare />,
  },
  {
    id: 3,
    name: 'twitch',
    url: 'twitch.com',
    icon: <FaTwitch />,
  },
];
