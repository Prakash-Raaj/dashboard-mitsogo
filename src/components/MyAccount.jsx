import React from 'react';

const MyAccount = (props) => {
  const accountClass =
    props.navBar === true
      ? 'my-account-page-nav-open'
      : 'my-account-page';
  return (
    <div className={accountClass}>
      <div className="account-item">
        <div className="sprite icon-my-profile"></div>
        <span>My Profile</span>
      </div>
      <div className="account-item">
        <div className="sprite icon-billing"></div>
        <span>Billing</span>
      </div>
      <div className="account-item">
        <div className="sprite icon-logout"></div>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default MyAccount;
