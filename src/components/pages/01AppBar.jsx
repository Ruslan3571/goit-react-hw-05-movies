import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavItem = styled(NavLink)`
  margin-right: 20px;
  border-radius: 5px;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    text-decoration: underline;
  }
`;

export const AppBar = () => {
  return (
    <header>
      <nav
        style={{
          boxShadow: '10px 5px 5px gray',
          margin: '15px 5px 15px 15px',
          padding: '15px',
        }}
      >
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </nav>
    </header>
  );
};
