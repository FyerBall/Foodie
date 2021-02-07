import React from 'react';
import styled from 'styled-components';
import { footerLinks as links } from '../util/constant';
import { Link } from 'react-router-dom';
import { social } from '../util/constant';
function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <FooterStyled>
      <div className='header'>
        <ul className='links'>
          {links.map(({ id, name, url }) => {
            return (
              <li className='link' key={id}>
                <Link to={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className='social'>
          <div className='news'>
            <p>stay up to date </p>
            <div className='newsletter__container'>
              <input type='text' placeholder='newsletter' />
              <button className='btn btn-primary' type='submit'>
                submit
              </button>
            </div>
          </div>
          <ul className='icons'>
            {social.map((icons) => {
              const { id, icon } = icons;
              return (
                <ul key={id} className='icon'>
                  <li onClick={() => openInNewTab('https://stackoverflow.com')}>
                    {icon}
                  </li>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <h5>
        &copy; {new Date().getFullYear()}
        <span> foodie</span>
      </h5>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  background-color: var(--secondary-color);
  padding: 30px 10px;
  margin: 50px 5px 0;

  border-radius: 10px;
  color: var(--body-color);
  text-align: center;

  .header {
    display: flex;
    justify-content: space-between;
  }
  .links {
    text-align: left;
    margin-bottom: 30px;
  }
  a {
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: block;
    padding: 5px 7px;
    transition: var(--transition);
    color: var(--body-color);
    width: fit-content;
    &:hover {
      padding-left: 4px;
      background: var(--primary-color);
    }
  }

  span {
    text-transform: capitalize;
    color: var(--primary-color);
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .newsletter__container {
    display: flex;
    align-items: center;
  }
  .news {
    background: var(--body-color);
    color: var(--primary-color);
    padding: 15px;
    border-radius: 10px;

    input {
      padding: 10px 5px;
      border: none;
      outline: none;
      background: var(--shadow-15);
      color: var(--secondary-color);
      text-transform: uppercase;
      font-weight: bold;
      font-family: 'Montserrat', sans-serif;
    }

    p {
      margin-bottom: 15px;
    }
  }
  .icons {
    display: flex;
    justify-content: space-between;
  }
  .icon li {
    color: var(--body-color);
    font-size: 24px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--primary-color);
    }
  }

  @media (min-width: 280px) and (max-width: 460px) {
    .newsletter__container {
      flex-direction: column;
    }
    input {
      margin-bottom: 15px;
    }
    .news {
      margin-bottom: 15px;
    }
    .header {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Footer;
