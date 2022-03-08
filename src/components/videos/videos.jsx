import React from 'react';
import Video from '../video/video';


const Videos = ({ videos, onVideoClick, display }) => (

    <ul>
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
