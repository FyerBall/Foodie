// TODO This component is GETTING TOO BIG!
// * -[x]  Move reviews/stars to its own component
// * -[x]  Add to Cart
// * -[]   Single__moreInfo
import React, { useState, useEffect } from 'react';
import { useProduct } from '../context/productContext';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import GoBack from '../Helper/GoBack';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import ImagesContainer from '../components/ImagesContainer';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';

function SingleProductPage() {
  const [isFav, setIsFav] = useState(false);
  const { id } = useParams();
  const {
    singleProducts,
    isSingleProductsLoading,
    isSingleProductsError,
    getSingleProducts,
  } = useProduct();

  useEffect(() => {
    const timeout = setTimeout(() => {
      getSingleProducts(id);
    }, 100);
    return () => clearTimeout(timeout);
    // TODO Removing the line of code below show the following warning
    // ? React Hook useEffect has a missing dependency: 'getSingleProducts'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isSingleProductsLoading) {
    return <Loading />;
  }
  if (isSingleProductsError) {
    return <Error />;
  }

  const {
    title,
    images,
    description,
    category,
    numOfRating,
    rating,
    price,
  } = singleProducts;

  return (
    <SingleStyled className='container main-center'>
      <ul className='single__header'>
        <GoBack />
        <div className='single__icons'>
          <li onClick={() => setIsFav(!isFav)}>
            {isFav ? (
              <FaHeart className='fav' size={20} />
            ) : (
              <FaRegHeart className='fav' size={20} />
            )}
          </li>
          <li>
            <FaShareAlt className='share' size={20} />
          </li>
        </div>
      </ul>
      <div className='single__container'>
        <div className='single__images'>
          <ImagesContainer images={images} title={title} gallery={true} />
        </div>
        <div className='single__info'>
          <h1 className='single__title primary-title'>{title}</h1>
          <p className='single__description'>{description}</p>

          <div className='single__cost'>
            <strong className='price'>${price}</strong>
            <Stars rating={rating} numOfRating={numOfRating} />
          </div>
          <div className='single__ctas'>
            <AddToCart singleProducts={singleProducts} />
          </div>
        </div>
      </div>
      <hr />

      <article className='single__moreInfo'>
        <div className='single__category'>
          <strong>
            Category: <Link to=''>{category}</Link>
          </strong>
          <strong>Allergens: Milk, Soy, Wheat</strong>
          <strong>Calories: 270</strong>
        </div>
      </article>
    </SingleStyled>
  );
}

const SingleStyled = styled.main`
  .single__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 20px 0;
    border-top: 1px solid var(--shadow-15);
    border-bottom: 1px solid var(--shadow-15);
    svg {
      transition: var(--transition);
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .single__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  .single__icons {
    display: flex;
    .fav {
      color: var(--primary-color);
    }
    .share {
      color: var(--secondary-color);
    }
  }
  .single__info {
    line-height: 2;
  }
  .single__description {
    letter-spacing: 1px;
    text-transform: none;
    color: var(--secondary-color);
    margin-left: 2px;
    line-height: 175%;
    letter-spacing: var(--spacing);
  }
  .single__cost {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
  }
  .price {
    font-size: 20px;
    color: var(--primary-color);
  }

  .single__ctas {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--shadow-15);
    border-radius: var(--radius-20);
    padding: 7px 2px;
    .quantity {
      display: flex;
      .counter {
        margin: 0 5px;
        width: 3rem;
        text-align: center;
      }
      button:hover {
        transform: scale(1.1);
      }
      svg {
        cursor: pointer;
        color: var(--secondary-color);
        transition: var(--transition);
      }
    }
  }

  .single__moreInfo {
    background: var(--shadow-15);
    border-radius: var(--radius-20);
  }

  .single__category {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    padding: 7px 2px;
    margin: 20px 0;
    border-radius: 10px;
    text-transform: capitalize;
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  .single__category > * {
    margin: 7px 0;
    padding: 12px 5px;
    border-bottom: 1px solid var(--shadow-15);
  }
  .single__category > *:last-child {
    border: none;
  }
  @media (min-width: 600px) {
    .single__container {
      gap: 3rem;
    }
  }

  @media (max-width: 430px) {
    .single__ctas {
      flex-direction: column;
      padding: 0px 2px;
      button {
        margin-top: 10px;
      }
    }
  }
`;

export default SingleProductPage;
