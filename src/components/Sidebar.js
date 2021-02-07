import React from 'react';
// assets
import logo from '../assets/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../util/constant';

import styled from 'styled-components';

import { useProduct } from '../context/productContext';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useProduct();

  return (
    <AsideStyled>
      <aside className={`${isSidebarOpen ? 'sidebar show' : 'show'}`}>
        <div className='sidebar__header'>
          <img src={logo} className='logo' alt='' />
          <button type='button' className='side__toggle' onClick={closeSidebar}>
            <FaTimes size={22} />
          </button>
        </div>
        <ul className='sidebar__links'>
          {links.map(({ id, name, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {name}
                </Link>
              </li>
            );
          })}
          <Link
            to='/'
            className='btn nav-cta__secondary'
            onClick={closeSidebar}
          >
            Sign up
          </Link>
        </ul>
      </aside>
    </AsideStyled>
  );
}

const AsideStyled = styled.div`
  .sidebar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .show {
    background-color: var(--overlay-color);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 200%;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .sidebar {
    transform: translate(0);
    z-index: 999;
    left: 0;
  }
  .logo {
    width: 100px;
    cursor: pointer;
  }
  .side__toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  svg {
    color: var(--primary-color);
    transition: var(--transition);
    margin-left: 10px;
    &:hover {
      color: var(--primary-color-light);
    }
  }

  .sidebar__links {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  a {
    text-transform: capitalize;
    color: var(--body-color);
    padding: 0.5rem 1rem;
    transition: var(--transition);

    &:hover {
      border-bottom: 1px solid var(--primary-color);
      letter-spacing: 1px;
    }
  }

  .nav-cta__secondary {
    display: block;
    color: var(--primary-color);
    background: var(--body-color);
    text-transform: uppercase;
    margin: 0 auto;
    &:hover {
      background: var(--primary-color-light);
      color: var(--secondary-color);
    }
  }
`;

export default Sidebar;
