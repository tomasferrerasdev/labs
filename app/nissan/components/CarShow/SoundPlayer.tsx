import { useRef, useState } from 'react';

export const SoundPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="path/to/your/sound.mp3" />
      <button onClick={playPauseHandler}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};
