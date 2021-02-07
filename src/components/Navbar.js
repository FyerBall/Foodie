import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHamburger } from 'react-icons/fa';
import { links } from '../util/constant';
import ShoppingCart from './ShoppingCart';

import { useProduct } from '../context/productContext';
function Navbar() {
  const { openSidebar } = useProduct();
  const [isScrolling, setIsScrolling] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      console.log('clean up');
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  return (
    <NavStyled isScrolling={isScrolling}>
      <div className='nav container'>
        <div className='header'>
          <Link to='/'>
            <img src={logo} alt='Foodie' className='logo' />
          </Link>
          <ul className=' links-center'>
            {links.map(({ id, name, url }) => {
              return (
                <li
                  className='link
                '
                  key={id}
                >
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
          </ul>

          <div className='icons'>
            <ul className='links '>
              <li className='link link-left'>
                <Link to='/' className='btn btn-primary nav-cta'>
                  Sign in
                </Link>
                <Link to='/' className='btn nav-cta__secondary'>
                  Sign up
                </Link>
              </li>
            </ul>
            <ShoppingCart />
            <button type='button' className='toggle' onClick={openSidebar}>
              <FaHamburger size={22} />
            </button>
          </div>
        </div>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isScrolling }) =>
    isScrolling ? '#4b4c63' : 'rgba(212, 217, 233, 0.15)'};
  position: sticky;
  top: 0;
  z-index: 10;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 100px;
    cursor: pointer;
  }
  .toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  svg {
    color: #4b4c63;
    transition: var(--transition);
    margin-left: 10px;
    color: ${({ isScrolling }) =>
      isScrolling ? ' var(--body-color)' : '#4b4c63'};
    &:hover {
      color: var(--primary-color);
    }
  }

  .links-center {
    display: none;
  }
  .links {
    display: flex;
  }
  .link {
    text-transform: capitalize;

    a {
      color: var(--primary-color);
      padding: 0.5rem 1rem;
      margin: 3px;
      transition: var(--transition);
    }
  }

  .link-left {
    transition: var(--transition);
    .nav-cta {
      color: var(--body-color);
      border: 1px solid transparent;
      &:hover {
        background: var(--primary-color-light);
        border: 1px solid var(--primary-color);
        color: var(--secondary-color);
      }
    }

    .nav-cta__secondary {
      color: var(--primary-color);
      &:hover {
        background: var(--primary-color-light);
        color: var(--secondary-color);
      }
    }
  }

  /* .link-left  */
  .icons {
    display: flex;
    align-items: center;
  }
  @media (min-width: 830px) {
    .links-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        &:hover {
          border-bottom: 1px solid var(--primary-color);
          letter-spacing: 1px;
        }
      }
    }
    .toggle {
      display: none;
    }
  }

  @media (max-width: 430px) {
    .nav-cta__secondary {
      display: none;
    }
  }

  @media (max-width: 280px) {
    .link a {
      padding: 0.2rem 0.1rem;
    }
  }
`;

export default Navbar;
