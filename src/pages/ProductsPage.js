import React from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import Products from '../components/Products';
function ProductsPage() {
  return (
    <ProductStyled className='container'>
      <Categories />

      <Products />
    </ProductStyled>
  );
}

const ProductStyled = styled.article`
  /* background: lightcoral; */
`;

export default ProductsPage;
