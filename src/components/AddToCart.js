import React, { useState } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import styled from 'styled-components';
import { useProduct } from '../context/productContext';
import { Link } from 'react-router-dom';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

function AddToCart({ singleProducts }) {
  const [amount, setAmount] = useState(1);

  const { addToCart } = useProduct();

  const { id, price } = singleProducts;
  return (
    <>
      <div className='quantity'>
        <button
          type='button'
          onClick={() => setAmount(amount === 1 ? 1 : amount - 1)}
          className='btn'
        >
          <FaMinusCircle />
        </button>
        <h2 className='counter'>{amount}</h2>
        <button
          type='button'
          onClick={() => setAmount(amount + 1)}
          className='btn'
        >
          <FaPlusCircle />
        </button>
      </div>
      <Link to='/cart'>
        <ButtonStyled
          type='button'
          className='btn btn-primary'
          onClick={() => addToCart(id, price, amount, singleProducts)}
        >
          add to cart
          <i className='icon-UpRight'>
            <BsBoxArrowUpRight />
          </i>
        </ButtonStyled>
      </Link>
    </>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  transition: var(--transition);

  svg {
    font-size: 15px;
    margin-left: 5px;
  }

  &:hover .icon-UpRight {
    display: inline;
  }

  .icon-UpRight {
    display: none;
  }
`;
export default AddToCart;
