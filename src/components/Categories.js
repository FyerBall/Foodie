// TODO CATEGORY FILTERED AND PASSED THROUGH CONTEXT
import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
function Categories() {
  return (
    <CategoryStyled>
      {categories.map((cate) => {
        const { id, icon, name } = cate;
        return (
          <div className='icons' key={id}>
            <img className='icon' src={icon} alt={name} />
            <span className='icon__title'>{name}</span>
          </div>
        );
      })}
    </CategoryStyled>
  );
}
const CategoryStyled = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  margin: 10px 15px;

  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3px 15px;
    cursor: pointer;
    padding: 10px;
    height: 100px;

    /* justify-content: space-between; */
  }
  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
  .icon__title {
    width: 100px;
    font-size: 12px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--spacing);
  }
`;

export default Categories;
