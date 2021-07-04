import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './headerNav.scss';

type Ilink = {
  path: string;
  text: string;
  icon: string;
};

type PropsType = {
  navLinks: Array<Ilink>;
  background: string;
  linkColor: string;
  logo: string;
};

export const HeaderNav: React.FC<PropsType> = ({ navLinks, background, logo }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }}>
        <figure>
          <img src={logo} height="40px" width="40px" alt="logo-nav-toggler" />
        </figure>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className={path === link.path ? 'active' : ''}>
              {link.text}
              <i className={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
