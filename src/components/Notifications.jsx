import React from 'react';
import image1 from '../assets/images/profile-pic-02.jpg';
import image2 from '../assets/images/profile-pic-06.jpg';
import image3 from '../assets/images/profile-pic-05.jpg';

const Notifications = (props) => {
  const notifyItems = [
    {
      name: 'Bavid Kames',
      time: '2',
      image: image1,
      task: 'Assigned you on the call with sara',
    },
    {
      name: 'Alexa Mary',
      time: '5',
      image: image2,
      task: 'Marked the task New UI has done',
    },
    {
      name: 'Eva Maria',
      time: '10',
      image: image3,
      task: 'Added a new comment on sales task',
    },
  ];

  const notifyClass =
    props.navBar === true
      ? 'notifications-page-nav-open'
      : 'notifications-page';

  return (
    <div className={notifyClass}>
      {notifyItems.map((item) => {
        return (
          <div className="single-item">
            <div className="left-item">
              <img
                src={item.image}
                alt={item.name}
                className="notify-img"
              />
              <div className="name-task">
                <p className="name">{item.name}</p>
                <p className="task">{item.task}</p>
              </div>
            </div>
            <p className="time">{item.time} min ago</p>
          </div>
        );
      })}
      <div className="show-button">
        <p>Show More</p>
      </div>
    </div>
  );
};

export default Notifications;
