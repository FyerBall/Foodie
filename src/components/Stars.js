import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
function Stars({ rating, numOfRating }) {
  return (
    <StarsStyled className='review'>
      <FaStar />
      {rating <= 1 ? (
        <span className=' secondary-info'>new</span>
      ) : (
        <p className='stars__num'>
          {rating}
          <span className='review__num secondary-info'>({numOfRating})</span>
        </p>
      )}
    </StarsStyled>
  );
}

const StarsStyled = styled.li`
  list-style: none;
  display: flex;
  align-items: center;

  svg {
    color: var(--primary-color);
    margin-right: 3px;
  }

  .review {
    display: flex;
    align-items: center;
  }
  .stars__num {
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .review__num {
    font-size: 12px;
    margin-left: 3px;
  }
`;
export default Stars;
