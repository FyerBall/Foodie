import React from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../context/productContext';

function ShoppingCart() {
  const { totalAmount } = useProduct();

  return (
    <CartStyled>
      <Link to='/cart' className='cart__icon'>
        <BsBag size={22} />

        {totalAmount <= 1 ? null : (
          <span className='cart__value'>{totalAmount}</span>
        )}
      </Link>
    </CartStyled>
  );
}

const CartStyled = styled.div`
  .cart__icon {
    /* display: flex;
    align-items: center;
    
     */
    position: relative;
  }
  .cart__value {
    position: absolute;
    top: -2px;
    right: 3px;
    background: var(--primary-color);
    color: var(--body-color);
    text-align: center;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default ShoppingCart;
