import './app.css';

import React, { useEffect, useState } from 'react';
import Search from './components/search';
import Videos from './components/videos/videos';
import VideoDetail from './components/video_detail';

function App() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);  // 초기값은 비어있는 배열 
  const [selectedVideo, setSelectedVideo] = useState(null);  // 선택된 비디오가 없는 null 초기상태

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

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
  }, []);  // useEffect()의 두번째 인자의 state가 업데이트 될때마다 콜백함수가 호출된다. 
          // 만약, 빈칸을 인자로 던지는 경우, 컴포넌트의 state나 prop이 업데이트 될때마다 반복해서 호출된다. 



  return(
    <>
      <Search />
      <section className='content'>
        {selectedVideo && (
          <div className='video-detail'>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}
        <div className='video-list'>
          <Videos 
            videos={videos} 
            onVideoClick={selectVideo}
            // { selectedVideo? 'list' : 'grid'}
            />
        </div>
      </section>
    </>
  ); 
}

export default App;
