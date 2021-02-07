import React from 'react';
import styled from 'styled-components';
function Title({ title, classes }) {
  return (
    <TitleStyled>
      <h1 className={classes}>{title}</h1>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  margin: 20px 0;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
`;

export default Title;
