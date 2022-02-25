import './app.css';

import React, { useEffect, useState } from 'react';
import Search from './components/search';
import Videos from './components/videos';

function App() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${apiKey}`, requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .then((error) => console.log('error', error));
  }, []);

  return(
    <>
      <Search />
      <Videos videos={videos} />
    </>
  ); 
}

export default App;
