import React from 'react';
import Video from './video';


const Videos = (props) => (
    <ul>
      {props.videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </ul>
  );

export default Videos;
