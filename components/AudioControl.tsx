import { IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { IoPause, IoPlay } from 'react-icons/io5'

interface Props {
  audioSrc: HTMLAudioElement;
}

export default function AudioControl({ audioSrc }: Props) {
  const [isAudioPlayed, setAudioPlayed] = useState<boolean>(false);

  useEffect(() => {
    audioSrc.addEventListener('ended', () => {
      setAudioPlayed(false);
    });
    return () => {
      audioSrc.removeEventListener('ended', () => {
        setAudioPlayed(false);
      });
    };
  }, []);

  const handlePlayClick = () => {
    audioSrc.play();
    setAudioPlayed(true);
  };

  const handlePauseClick = () => {
    audioSrc.pause();
    setAudioPlayed(false);
  };


  if (isAudioPlayed) {
    return  (
      <IconButton
        icon={<IoPause />}
        onClick={handlePauseClick}
        aria-label="pause"
        variant="ghost"
      />
    )
  }

  return (
    <IconButton
      icon={<IoPlay />}
      onClick={handlePlayClick}
      aria-label="play"
      rounded="full"
      variant="ghost"
    />
  );
}