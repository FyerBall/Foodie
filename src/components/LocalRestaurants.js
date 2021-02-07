import React from 'react';
import { useProduct } from '../context/productContext';
import Loading from './Loading';
import Error from './Error';
import Title from '../Helper/Title';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImagesContainer from './ImagesContainer';

export const LocalRestaurants = () => {
  const { featuredProducts, isProductsLoading, isProductsError } = useProduct();

  if (isProductsLoading) {
    return <Loading />;
  }
  return (
    <LocalStyled className='container'>
      <Title title='Local favorite' />
      {isProductsError && <Error />}
      <div className='product'>
        {featuredProducts.map((local) => {
          const { id, images, title, coupon, freeDelivery: delivery } = local;
          return (
            <Link to={`/product/${id}`} key={id}>
              <div className='card'>
                <div className='card__header'>
                  <ImagesContainer
                    images={images}
                    title={title}
                    gallery={false}
                  />
                </div>
                <div className='card__footer'>
                  <span className='coupon'>${coupon} OFF</span>
                  <h4 className='title'>{title}</h4>
                  <span className='delivery__info secondary-info'>
                    {delivery ? 'Free Delivery' : null}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </LocalStyled>
  );
};

const LocalStyled = styled.section`
  padding: 10px;

  .product {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    justify-content: center;
    grid-gap: 1rem;
    background: var(--shadow-15);
    border-radius: 20px;
  }
  .card {
    background: var(--body-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    margin: 20px;
    padding: 30px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    transition: var(--transition);
    height: 90%;
    &:hover {
      box-shadow: 0 1px 18px rgb(0 0 0 / 20%);
    }
  }
  .card__header {
    width: 100%;
    height: 15rem;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    height: 100%;
    border-radius: 15px;
  }
  .card__footer {
    padding-top: 10px;
    text-align: left;
    width: 100%;
    color: var(--secondary-color);
    .title {
      text-transform: capitalize;
    }
    .delivery__info {
      color: var(--primary-color);
      text-transform: uppercase;
    }
  }

  @media (max-width: 320px) {
    .product {
      grid-template-columns: repeat(auto-fill, 275px);
    }
  }
`;
