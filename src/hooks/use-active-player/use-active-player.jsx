import React, {useState} from "react";
import AudioPlayer from "../../components/audio-player/audio-player";

const useActivePlayer = () => {
  const [activePlayerId, setActivePlayerId] = useState(0);
  const renderPlayer = (src, id) => {
    return (
      <AudioPlayer
        src={src}
        isPlaying={id === activePlayerId}
        onPlayButtonClick={() => setActivePlayerId(activePlayerId === id ? -1 : id)}
      />
    );
  };

  return [renderPlayer];
};

export default useActivePlayer;
