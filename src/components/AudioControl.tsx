import { IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { IoPause, IoPlay } from 'react-icons/io5'

interface Props {
  audioSrc: string;
}

export default function AudioControl({ audioSrc }: Props) {
  const [isAudioPlayed, setAudioPlayed] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    if (!audio) {
      return;
    }

    audio.addEventListener('ended', () => {
      setAudioPlayed(false);
    });
    
    if (isAudioPlayed) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener('ended', () => {
        setAudioPlayed(false);
      });
    };
  }, [audio, isAudioPlayed, audioSrc]);

  const handlePlayClick = () => {
    if (!audio) {
      setAudio(new Audio(audioSrc));
    }
    setAudioPlayed(true);
  };

  const handlePauseClick = () => {
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