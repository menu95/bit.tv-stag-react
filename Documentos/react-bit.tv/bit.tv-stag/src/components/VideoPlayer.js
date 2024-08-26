import React, { useEffect, useRef } from "react";
import videojs from "video.js";

const VideoPlayer = ({ src, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      autoplay: true,
      controls: true,
      fluid: true,
    });

    player.src({ type, src });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src, type]);

  return (
    <div id="player-container">
      <video
        id="video-player"
        className="video-js vjs-default-skin"
        ref={videoRef}
      ></video>
    </div>
  );
};

export default VideoPlayer;
