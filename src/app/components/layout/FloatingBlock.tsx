'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';

const FloatingCircle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="relative">
      {isPlaying && (
        <div className="fixed -top-6 left-16 z-50 h-16 w-16">
          <Image
            src="/notesanimation.webp"
            alt="Animated GIF"
            width={40}
            height={40}
            className="h-auto w-full"
          />
        </div>
      )}
      <div
        className={`fixed left-5 top-5 z-50 h-16 w-32 rounded-2xl bg-slate-400 ${isPlaying ? 'animate-custom-ping' : ''}`}
        onClick={togglePlay}>
        <Image
          src="/fefeinheadphone.png"
          alt="Slide image"
          width={180}
          height={20}
          className={`max-h-16 w-full rounded-2xl border-2 border-solid border-black object-cover ${isPlaying ? '' : 'opacity-50'}`}
        />
      </div>
      <div className={`fixed left-16 top-10 z-50 h-8 w-8 rounded-full`} onClick={togglePlay}>
        <PlayIcon className={`${isPlaying ? 'hidden' : ''}`} />
      </div>
      <audio ref={audioRef} loop>
        <source src="/music/FEFE.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FloatingCircle;
