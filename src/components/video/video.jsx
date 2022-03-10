import React from 'react';
import styles from './video.module.css';

const Video = ({ video, video: {snippet}, onVideoClick, display }) => {

    const url = snippet.thumbnails.medium.url;
    const title = snippet.title;
    const channelTitle = snippet.channelTitle;
    const publishedAt = snippet.publishedAt;
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <div className={styles.container}>
            <div className={styles.video} onClick={() => onVideoClick(video)}>
                <div className={styles.thumbnail}>
                    <img src={url} alt="video thumbnail"/>
                </div>
                <div className={styles.details}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.channel}>{channelTitle}</span>
                    <span className={styles.publishdate}>{publishedAt}</span>
                </div>
            </div>
        </div>
    )
}

export default Video;
