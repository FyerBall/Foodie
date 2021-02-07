// TODO Too MANY! They need def. components
// ? -[]  Empty
// ? -[]  Items
// ? -[]  Checkout/summary

import React from 'react';
import { useProduct } from '../context/productContext';
import styled from 'styled-components';
import { Empty } from './';
import CartItems from '../components/CartItems';
import Total from '../components/Total';

function CartPage() {
  const { cart, clearCart, removeItem } = useProduct();

  return (
    <CartStyled className='container'>
      {cart <= 1 ? (
        <Empty />
      ) : (
        <>
          <CartItems
            cart={cart}
            clearCart={clearCart}
            removeItem={removeItem}
          />

          <Total />
        </>
      )}
    </CartStyled>
  );
}

const CartStyled = styled.main`
  padding-top: 10px;

  padding: 30px 10px;

  a {
    color: var(--secondary-color);
  }
  svg {
    transition: var(--transition);

    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    background: var(--shadow-15);
    border-radius: var(--radius-20);
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  .items {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr auto;
    grid-column-gap: 1.5rem;
    margin-bottom: 3rem;

    .col {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .col-1 {
      justify-content: flex-start;
    }
    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
      margin-right: 1rem;
    }
    input {
      width: 40px;
      text-align: center;
      margin: 0 10px;
    }
  }
  .quantity {
    display: flex;
    align-items: center;
    transition: var(--transition);
    flex-direction: column;
    .counter {
      margin: 0 5px;
      width: 1rem;
      text-align: center;
    }
    svg {
      color: var(--secondary-color);
    }
  }
  .remove {
    color: var(--primary-color);
  }

  .clear-cart {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 430px) {
    /* background: lightblue; */
    .items {
      grid-column-gap: 0.5rem;
      grid-template-columns: 1fr 1fr auto;
    }

    .col-1 {
      flex-direction: column;
      align-items: center;
      /* background: red; */
      img {
        margin: 0;
        margin-bottom: 0.5rem;
      }
    }
    .col:nth-child(2) {
      justify-content: space-evenly;
      /* background: red; */
    }
  }
`;
export default CartPage;
