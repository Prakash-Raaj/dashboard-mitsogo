import React from 'react';
import mainImage from '../assets/images/profile-pic-01.jpg';
import pro1 from '../assets/images/profile-pic-03.jpg';
import pro2 from '../assets/images/profile-pic-02.jpg';
import pro3 from '../assets/images/profile-pic-04.jpg';

const User = () => {
  const ourUserList = [
    {
      image: pro1,
      name: 'Drew James',
      country: 'United States',
      mobile: '8715674877',
    },
    {
      image: pro2,
      name: 'Bavid Kames',
      country: 'United States',
      mobile: '8715674877',
    },
    {
      image: pro3,
      name: 'Lavid Emes',
      country: 'United States',
      mobile: '8715674877',
    },
  ];
  return (
    <div className="user-page">
      <div className="user-profile">
        <img
          src={mainImage}
          alt="profile pic"
          className="user-profile-img"
        />
        <h4>Nick Herasimenka</h4>
        <p>United States</p>
        <div className="user-connect">
          <div className="sprite icon_twitter connect-icon"></div>
          <div className="sprite icon_fb connect-icon"></div>
          <div className="sprite icon_linkedIn connect-icon"></div>
          <div className="sprite icon_whatsApp connect-icon"></div>
        </div>
      </div>
      <div className="our-users">
        <div className="heading">
          <h6>Our Users</h6>
          <div className="sprite icon_options"></div>
        </div>
        {ourUserList.map((item) => {
          return (
            <div className="our-user-list">
              <div className="user-pro">
                <img
                  src={item.image}
                  alt={item.name}
                  className="our-user-img"
                />
                <div className="name-country">
                  <div className="our-user-name">{item.name}</div>
                  <p>{item.country}</p>
                </div>
              </div>
              <p className="mobile">{item.mobile}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
