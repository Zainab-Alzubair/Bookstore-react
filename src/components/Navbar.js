import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <ul className="navList">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="navItem" exact>
              {link.text}
              {' '}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
