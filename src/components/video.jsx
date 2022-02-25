import React from 'react';

const Video = (props) => {

    const url = props.video.snippet.thumbnails.medium.url;
    const title = props.video.snippet.title;
    const channelTitle = props.video.snippet.channelTitle;
    const publishedAt = props.video.snippet.publishedAt;

    return (
        <>
            <div className="media">
                <div className="thumbnail-area">
                    <a href="" className="video-link">
                        <img src={url} alt="" className="thumbnail" />
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
