import React, {Fragment} from "react";
import PropTypes from "prop-types";
import useAudioPlayer from "../../hooks/use-audio/use-audio";

const AudioPlayer = (props) => {
  const {
    src,
    // isLoading,
    onPlayButtonClick,
    isPlaying,
    // children
  } = props;

  const [isLoading, audioRef] = useAudioPlayer(isPlaying, src);

  return (
    <Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        {/* {children} */}
        <audio
          ref={audioRef}
        />
      </div>
    </Fragment>
  );
};

AudioPlayer.propTypes = {
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node
  // ]).isRequired,
  // isLoading: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default React.memo(AudioPlayer);
