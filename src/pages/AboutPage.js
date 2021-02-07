import React from 'react';
import cooking from '../assets/cooking.svg';

import styled from 'styled-components';
function AboutPage() {
  return (
    <AboutStyled className='container'>
      <img src={cooking} alt='chef hat' />
      <p className='about__story'>
        Lorem ipsum dolor sit amet
        <span className='about__highlights'> consectetur</span> adipisicing
        <span className='about__highlights'> elit.</span> Suscipit dolores alias
        iure. Et delectus sed fugiat velit autem facere at{' '}
        <span className='about__highlights'>nostrum?</span> Hic laborum{' '}
        <span className='about__highlights'>cupiditate </span> nesciunt
        similique consectetur minus{' '}
        <span className='about__highlights'>voluptates</span> iure corrupti?
        Dignissimos, alias quod ea neque cupiditate blanditiis nobis enim.
      </p>
    </AboutStyled>
  );
}

const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem;
    margin: 0 auto 50px;
  }
  .about__story {
    letter-spacing: var(--spacing);
  }

  .about__highlights {
    color: var(--primary-color);
    letter-spacing: 0.2rem;
    font-weight: 400;
    font-size: 18px;
  }

  @media (min-width: 790px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  img {
    margin-bottom: 8rem;
  }
`;

export default AboutPage;
