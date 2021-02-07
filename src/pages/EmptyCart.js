// TODO Empty page and error are the same.
// ? Create a component with the following props
// * -[] Image
// * -[] Text
// * -[] Customizable text for Link
import React from 'react';
import giftImg from '../assets/gift.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function EmptyPage() {
  return (
    <EmptyStyled>
      <img src={giftImg} alt='gift box' />

      <h3 className='error__message'>Cart is empty</h3>
      <Link to='/products' className='btn btn-primary'>
        shop now
      </Link>
    </EmptyStyled>
  );
}

const EmptyStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: 'Poppins', sans-serif;
  img {
    width: 25rem;
  }

  .error__message {
    margin: 2rem auto;
  }
`;

export default EmptyPage;
