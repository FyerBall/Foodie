import React from 'react';
import styled from 'styled-components';

function Total() {
  return (
    <TotalStyled>
      <h3>Checkout</h3>
      <hr />
      <div className='total'>
        <p>
          Subtotal: <span>$100</span>
        </p>
        <p>
          Delivery Fee: <span>$2.99</span>
        </p>
        <p>
          Total: <strong>$102.99</strong>
        </p>
      </div>
    </TotalStyled>
  );
}

const TotalStyled = styled.article`
  background: var(--shadow-15);
  padding: 30px 15px;
  margin-top: 20px;
  border-radius: var(--radius-20);

  p {
    display: flex;

    justify-content: space-between;
  }

  .total {
    margin-left: auto;
    line-height: 2;

    letter-spacing: var(--spacing);
  }
`;

export default Total;
