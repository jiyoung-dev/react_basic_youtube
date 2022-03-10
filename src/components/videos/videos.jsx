import React from 'react';
import Video from '../video/video';
import styles from './videos.module.css';

const Videos = ({ videos, onVideoClick, display }) => (

    <ul className={styles.videos}>
      {videos.map((video) => (
        <Video 
          key={video.id} 
          video={video} 
          onVideoClick={onVideoClick} 
          display={display}
        />
      ))}
    </ul>
  );

export default Videos;
