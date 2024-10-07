// src/components/Background.tsx
import React from "react";
import useSettingsStore from "../stores/SettingsStore"; // Import the store

const Background = () => {
  // Get videoUrl and autoPlay from the store
  const { videoUrl, autoPlay, keyProp } = useSettingsStore();

  // Use videoUrl and autoPlay from the store
  return (
    <div>
      <video
        autoPlay={autoPlay}
        muted
        loop
        id="videoBG"
        key={keyProp} // This remounts the video when autoPlay changes
        src={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
