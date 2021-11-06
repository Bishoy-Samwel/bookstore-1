import React from 'react';
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 2,
      path: '/books',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <div id="header">
      <div className="navbar">
        <span id="logo">
          Bookstore CMS
        </span>
        {links.map(link => (
          <span key={link.id}>
            <NavLink activeClassName="active-link" to={link.path} exact>
              {link.text}
              {' '}
            </NavLink>
          </span>
        ))}
      </div>
      <Avatar className="avatar" id="avatar-icon" />
    </div>
  );
};
export default Navbar;
