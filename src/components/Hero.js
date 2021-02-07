import React from 'react';
import heroImg from '../assets/Hero Iamge.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Hero() {
  return (
    <HeroStyled className=''>
      <div className='text'>
        <h2 className='title'>Hungry?</h2>
        <p className='subtitle'>
          you are in the right place. Order your favorite dishes and support
          your local restaurants
        </p>
        <Link to='/products' className=' btn-primary btn '>
          Find food
        </Link>
      </div>
      <img src={heroImg} alt='ice cream' />
    </HeroStyled>
  );
}
const HeroStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  overflow: hidden;
  img {
    width: 27rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 50vh;
    justify-content: center;
  }

  .title {
    color: var(--primary-color);
    font-size: 50px;
    font-weight: 300;
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    font-weight: 100;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: var(--spacing);
    padding: 20px 0;
  }
  @media screen and (min-width: 880px) {
    justify-content: space-evenly;
    .hero__text {
      width: 50%;
      margin-left: 10rem;
      justify-content: space-around;
    }
    .hero__subtitle {
      width: 70%;
      font-size: 18px;
    }
  }
  @media (max-width: 430px) {
    .title {
      font-size: 35px;
    }
    img {
      width: 20rem;
    }
  }
`;

export default Hero;
