import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="relative w-full h-0 aspect-w-16 aspect-h-9">
      <ReactPlayer
        url={url}
        className="absolute top-0 left-0 w-full h-full"
        controls={true}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { origin: 'http://youtube.com' } // Update origin to match your development server
          }
        }}
      />
    </div>
  );
};

export default VideoPlayer;
