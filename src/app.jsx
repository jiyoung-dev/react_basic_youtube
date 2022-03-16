import styles from './app.module.css';

import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import Videos from './components/videos/videos';
import VideoDetail from './components/video_detail/video_detail';

function App() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);  // 초기값은 비어있는 배열 
  const [selectedVideo, setSelectedVideo] = useState(null);  // 선택된 비디오가 없는 null 초기상태

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = query => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apiKey}`, requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${apiKey}`, requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .then((error) => console.log('error', error));
  }, []);  // useEffect()의 두번째 인자의 state가 업데이트 될때마다 콜백함수가 호출된다. 
          // 만약, 빈칸을 인자로 던지는 경우, 컴포넌트의 state나 prop이 업데이트 될때마다 반복해서 호출된다. 



  return(
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <Videos 
            videos={videos} 
            onVideoClick={selectVideo}
            display={selectedVideo? 'list' : 'grid'}  //선택된 비디오가 있으면 list, 없으면 grid
            />
        </div>
      </section>
    </div>
  ); 
}

export default App;
