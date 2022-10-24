import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const navItems = [
    {
      label: 'Home',
      icon: 'sprite icon_home',
      iconSelected: 'sprite icon_home_selected',
    },
    {
      label: 'Dashboard',
      icon: 'sprite icon_dashboard',
      iconSelected: 'sprite icon_dashboard_selected',
    },
    {
      label: 'Inbox',
      icon: 'sprite icon_inbox',
      iconSelected: 'sprite icon_inbox_selected',
    },
    {
      label: 'Products',
      icon: 'sprite icon_products',
      iconSelected: 'sprite icon_products_selected',
    },
    {
      label: 'Admin',
      icon: 'sprite icon_admin',
      iconSelected: 'sprite icon_admin_selected',
    },
  ];
  const location = useLocation();
  const route = location.pathname;
  return (
    <div className="navBar">
      <h2>ACME</h2>
      {navItems.map((item) => {
        if (route === `/${item.label}`) {
          return (
            <ul className="list-navbar-selected" key={item.label}>
              <Link to={`/${item.label}`}>
                <div className="list-item">
                  <div className={item.iconSelected}></div>
                  <li className="nav_item">{item.label}</li>
                </div>
              </Link>
              {item.label === 'Inbox' ? (
                <span className="new-badge">New</span>
              ) : (
                ''
              )}
            </ul>
          );
        } else {
          return (
            <ul className="list-navbar" key={item.label}>
              <Link to={`/${item.label}`}>
                <div className="list-item">
                  <div className={item.icon}></div>
                  <li className="nav_item">{item.label}</li>
                </div>
              </Link>
              {item.label === 'Inbox' ? (
                <span className="new-badge">New</span>
              ) : (
                ''
              )}
            </ul>
          );
        }
      })}
    </div>
  );
};

export default NavBar;
