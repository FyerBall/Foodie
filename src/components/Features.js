import React from 'react';
import { features } from '../util/constant';
import Title from '../Helper/Title';
import styled from 'styled-components';

function Features() {
  return (
    <FeaturesStyled className='container'>
      <div className='container'>
        <div className='cards'>
          <div className='card__container'>
            {features.map((item, _id) => {
              const { title, info, secondaryText, icon } = item;
              return (
                <div className='card' key={_id}>
                  <div className='card__header'>
                    <span>{icon}</span>
                    <Title classes='title' title={title} />
                  </div>

                  <small className='feature__info'>
                    {info}{' '}
                    <span className='feature__info-secondary secondary-info'>
                      {secondaryText}
                    </span>
                  </small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FeaturesStyled>
  );
}

const FeaturesStyled = styled.section`
  margin: 50px auto;
  .container {
    background: var(--shadow-15);
    border-radius: 20px;
    padding: 10px;
  }
  .card__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    justify-content: center;
    grid-gap: 1rem;
  }

  .card {
    background: var(--body-color);
    border-radius: 15px;
    margin: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    transition: var(--transition);
    text-align: center;

    &:hover {
      box-shadow: 0 1px 18px rgb(0 0 0 / 20%);
    }
  }

  .card__header {
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      color: var(--primary-color);
      font-size: 30px;
    }
  }
  .title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: var(--secondary-color);
  }
  .feature__info {
    color: var(--primary-color);
    font-size: 18px;
  }

  @media (min-width: 739px) and (max-width: 1225px) {
    .card {
      margin: 10px;
      padding: 10px;
    }
    .card__container {
      grid-template-columns: repeat(3, 1fr);
    }
    .feature__info {
      font-size: 15px;

      padding: 10px;
    }
  }

  @media (max-width: 320px) {
    .card__container {
      grid-template-columns: repeat(auto-fill, 275px);
    }
  }
`;
export default Features;
