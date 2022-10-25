import React, { useState } from 'react';
import Header from './Header';
import MyAccount from './MyAccount';
import Notifications from './Notifications';
import NavBar from './NavBar';

const TopHeader = (props) => {
  const [notifications, setNotifications] = useState(false);
  const [profileDisplay, setProfileDisplay] = useState(false);
  // const [navBar, setNavBar] = useState(false);
  console.log('nav bar checking', props.nav);
  return (
    <div className="Wrapper">
      {props.nav && <NavBar />}
      <Header
        notifications={notifications}
        setNotifications={setNotifications}
        profileDisplay={profileDisplay}
        setProfileDisplay={setProfileDisplay}
        navBar={props.nav}
        setNavBar={props.setNav}
      />
      {notifications && (
        <div className="notify-wrapper">
          <Notifications navBar={props.nav} />
        </div>
      )}
      {profileDisplay && (
        <div className="my-account-wrapper">
          <MyAccount navBar={props.nav} />
        </div>
      )}
    </div>
  );
};

export default TopHeader;
