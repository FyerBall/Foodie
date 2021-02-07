import React from 'react';
import errorImg from '../assets/error.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <ErrorStyled>
      <img src={errorImg} alt='' />

      <h3 className='error__message'>
        The page you are looking for doesn't exist
      </h3>

      <Link to='/' className='btn btn-primary'>
        Go back home
      </Link>
    </ErrorStyled>
  );
}

const ErrorStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: 'Poppins', sans-serif;
  img {
    width: 30rem;
  }

  .error__message {
    margin: 2rem auto;
  }
`;

export default ErrorPage;
