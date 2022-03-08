import React from 'react';
import styles from './video.module.css';

const Video = ({ video, video: {snippet}, onVideoClick, display }) => {

    const url = snippet.thumbnails.medium.url;
    const title = snippet.title;
    const channelTitle = snippet.channelTitle;
    const publishedAt = snippet.publishedAt;
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <>
            <div className="media" onClick={() => onVideoClick(video)}>
                <div className="thumbnail-area">
                    <a href="" className="video-link">
                        <img src={url} alt="video thumbnail" className="thumbnail" />
                    </a>
                </div>
                <div className="details">
                    <span className="video-title">
                        <a href="" className="video-title-link">{title}</a>
                    </span>
                    <span className="channel-title">
                        <a href="" className="channel-title-link">{channelTitle}</a>
                    </span>
                    <span className="publish-date">
                        <a href="" className="publish-date-link">{publishedAt}</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Video;
