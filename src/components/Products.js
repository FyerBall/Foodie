import React from 'react';
import { useProduct } from '../context/productContext';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import ImagesContainer from './ImagesContainer';
import styled from 'styled-components';
import Stars from './Stars';
// TODO SHOULD I ADD ADD TO CART HERE TOO???
// import AddToCart from './AddToCart';

function Products() {
  const { products, isProductsError, isProductsLoading } = useProduct();

  return (
    <ProductsStyled>
      {isProductsError && <Error />}
      {isProductsLoading ? (
        <Loading />
      ) : (
        <div className='product'>
          {products.map((product) => {
            const {
              id,
              // category,
              // description,
              coupon,
              freeDelivery: delivery,
              images,
              // local,
              numOfRating,
              rating,
              price,
              title,
              sponsored,
            } = product;

            return (
              <div className='card' key={id}>
                <Link to={`/product/${id}`}>
                  <div className='card__header'>
                    <ImagesContainer
                      images={images}
                      title={title}
                      gallery={false}
                    />
                    <span className='coupon coupon-top '>${coupon} OFF</span>
                    {sponsored ? (
                      <span className='secondary-info'>sponsored</span>
                    ) : null}
                  </div>
                  <div className='card__footer'>
                    <h4 className='title'>{title}</h4>
                    <div className='priceAndRating'>
                      <h3 className='price'>${price}</h3>
                      <Stars rating={rating} numOfRating={numOfRating} />
                    </div>
                    <span className='delivery__info secondary-info'>
                      {delivery ? 'Free Delivery' : null}
                    </span>
                  </div>
                </Link>
                {/* <AddToCart /> */}
              </div>
            );
          })}
        </div>
      )}
    </ProductsStyled>
  );
}

const ProductsStyled = styled.main`
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
    button {
      margin-top: 30px;
    }
  }
  .card__header {
    width: 100%;
    height: 15rem;
    margin-bottom: 15px;

    position: relative;
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
    line-height: 2;
    .title {
      text-transform: capitalize;
    }
    .priceAndRating {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .price {
      color: var(--primary-color);
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

export default Products;
