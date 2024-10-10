import { useEffect, useRef } from "react";
import useSettingsStore from "../stores/SettingsStore";

const R2_URL = "https://pub-59f231db649142c98600f8c53a02c6ef.r2.dev";

const Background = () => {
  const { video, videoSettings } = useSettingsStore();
  const videoURL = `${R2_URL}/${video.url}`;

  // Use a ref to access the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // If autoplay is off, pause the video
    if (!videoSettings.autoPlay && videoElement) {
      videoElement.pause();
    } else if (videoSettings.autoPlay && videoElement) {
      void videoElement.play();
    }
  }, [videoSettings.autoPlay]);

  return (
    <video
      ref={videoRef} // Attach the ref to the video element
      autoPlay={videoSettings.autoPlay}
      muted
      loop
      id="videoBG"
      key={videoSettings.keyProp} // Ensure the video re-renders when key changes
    >
      <source src={videoURL} type="video/mp4" />
    </video>
  );
};

export default Background;
