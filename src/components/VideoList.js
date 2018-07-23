import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  return (
    <ul className="col-md-4">
      {props.videos.map(video => (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          video={video}
          key={video.etag}
        />
      ))}
    </ul>
  );
};

export default VideoList;
