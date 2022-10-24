import React from 'react';
import thumbnail from '../assets/images/video thumbnail.png';

const ProductVideo = ({ nav }) => {
  const iconClass =
    nav === false ? 'play-icon' : 'play-icon-nav-open';
  return (
    <div className="video-page">
      <div className="our-users">
        <div className="heading">
          <h6>Product Video</h6>
          <div className="sprite icon_options"></div>
        </div>
        <a
          href="https://www.youtube.com/watch?v=Oy6hk6Y7VHQ&ab_channel=Hexnode"
          target="_blank"
          rel="noreferrer"
        >
          <div className="video">
            <img src={thumbnail} alt="video thumbnail" />

            {/* <div className={iconClass}>
              <div className="sprite icon_play"></div>
            </div> */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductVideo;
