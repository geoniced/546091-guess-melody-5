import {createRef, useState, useEffect} from "react";

const useAudio = (isPlaying, src) => {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = createRef();

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => setIsLoading(false);

    return () => {
      audio.oncanplaythrough = null;
    };
  }, []);

  return [isLoading, audioRef];
};

export default useAudio;
