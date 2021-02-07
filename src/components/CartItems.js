import React from 'react';
import { TiDelete } from 'react-icons/ti';
import styled from 'styled-components';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useProduct } from '../context/productContext';
function CartItems({ cart, clearCart, removeItem }) {
  const { changeQuantity } = useProduct();

  return (
    <ItemsStyled>
      <section>
        <p className='cart__message'>
          you have{' '}
          <strong>
            {cart.length} {cart.length <= 1 ? 'item' : 'items'}
          </strong>{' '}
          in your cart
        </p>
        <hr />
        {cart.map((item) => {
          const { id, price, amount, image, name } = item;
          return (
            <article key={id} className='items'>
              <Link to={`/product/${id}`}>
                <div className='col col-1 '>
                  <img src={image} alt={name} />
                  <h4>{name}</h4>
                </div>
              </Link>
              <div className='col'>
                <p className='coupon'>${price}</p>
                <div className='quantity'>
                  <BsArrowUpShort onClick={() => changeQuantity(id, 'INC')} />
                  <h5 className='counter'>{amount}</h5>
                  <BsArrowDownShort onClick={() => changeQuantity(id, 'DEC')} />
                </div>
              </div>
              <TiDelete
                className='remove'
                size={24}
                onClick={() => removeItem(id)}
              />
            </article>
          );
        })}
        <hr />
      </section>
      <button
        type='button'
        className='btn btn-primary clear-cart'
        onClick={clearCart}
      >
        clear cart
      </button>
    </ItemsStyled>
  );
}

const ItemsStyled = styled.div`
  section {
    padding: 30px 0px;
    .cart__message {
      margin-bottom: 20px;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
    }
  }
`;
export default CartItems;
