import React, { useState } from 'react';
import userImage from '../assets/images/profile-pic-01.jpg';

const Header = (props) => {
  const [chevronClass, setChevronClass] = useState(
    'sprite small-down chevron'
  );
  const headerClass =
    props.navBar === true ? 'header-nav-open' : 'header';
  return (
    <div className={headerClass}>
      <div className="search-bar">
        <div className="input-field">
          <div
            className="sprite menu dash-icon"
            onClick={() => {
              props.setNavBar(props.navBar === false ? true : false);
            }}
          ></div>
          <div className="sprite icon_search search-icon"></div>
          <input
            type="text"
            name="search bar"
            id="searchbar"
            placeholder="Search transactions, invoices or help"
            className="input-bar"
          />
        </div>
        <div className="profile">
          <div className="sprite icon_search search-icon-mobile"></div>

          <div
            className="sprite notification"
            onClick={() => {
              if (props.profileDisplay === true) {
                props.setProfileDisplay(false);
              }
              props.setNotifications(
                props.notifications === true ? false : true
              );
            }}
          ></div>
          {!props.notifications && (
            <span className="notification-badge"></span>
          )}
          <p>John Doe</p>
          <div
            className={chevronClass}
            onClick={() => {
              if (props.notifications === true) {
                props.setNotifications(false);
              }
              props.setProfileDisplay(
                props.profileDisplay === false ? true : false
              );
              setChevronClass(
                chevronClass === 'sprite small-down chevron'
                  ? 'sprite small-down chevron-expanded'
                  : 'sprite small-down chevron'
              );
            }}
          ></div>
          <img
            src={userImage}
            alt="user"
            className="profile-img"
            onClick={() => {
              if (props.notifications === true) {
                props.setNotifications(false);
              }
              props.setProfileDisplay(
                props.profileDisplay === false ? true : false
              );
              setChevronClass(
                chevronClass === 'sprite small-down chevron'
                  ? 'sprite small-down chevron-expanded'
                  : 'sprite small-down chevron'
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
