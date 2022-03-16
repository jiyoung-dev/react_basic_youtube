import React, { useState } from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({ video, video: {snippet} }) =>  {

    const [closed, setClosed] = useState(false);
    const [looked, setLooked] = useState(false);

    const handleMoreBtn = () => {
        setClosed(!closed);
        setLooked(!looked);
    };

    return (
        <section className={styles.detail}>
            <iframe 
                className={styles.video}
                type="text/html" 
                width="100%" 
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0" 
                allowfullscreen
            ></iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <h4>{snippet.publishedAt}</h4>
            <hr />
            <span className={closed ? styles.open : styles.close}>{snippet.description}</span>
            {/* <button onClick={handleMoreBtn}>더보기</button> */}
            <button onClick={handleMoreBtn}>{looked ? "닫기" : "더보기"}</button>
            
        </section>
    )

}



export default VideoDetail;