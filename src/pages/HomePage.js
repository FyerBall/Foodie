import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { LocalRestaurants as Local } from '../components/LocalRestaurants';
function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Local />
    </div>
  );
}

export default Home;
