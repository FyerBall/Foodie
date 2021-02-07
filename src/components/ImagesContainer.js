import React, { useState } from 'react';
import styled from 'styled-components';
function ImagesContainer({ images = [{ image: '' }], title, gallery }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <ImagesStyled>
      <img src={mainImage.image} alt={title} className='image__main' />
      {gallery && (
        <div className='image__gallery'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={title}
              onClick={() => setMainImage(images[index])}
              className={`${
                image.image === mainImage.image ? 'active' : null
              } `}
            />
          ))}
        </div>
      )}
    </ImagesStyled>
  );
}

const ImagesStyled = styled.div`
  .image__main {
    height: 200px;
  }

  .image__gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 1px solid var(--primary-color);
  }
`;

export default ImagesContainer;
