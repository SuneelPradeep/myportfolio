'use client';
import React, { useEffect, useRef } from 'react'

// const BackgroundMusic = () => {
//     useEffect(()=>{
//       const audio = new Audio('/music/oceans.mp3')
//       audio.loop = true;
//       audio.play()
//     console.log('playing audio',audio)
//     //   return ()=> audio.pause()
//     },[])
//   return (
//     <></>
//   )
// }

// export default BackgroundMusic

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Autoplay failed:', error);
      }
    };

    playAudio();
  }, []);

  const handlePlay = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (error) {
      console.error('User interaction play failed:', error);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="/music/oceans.mp3" loop />
      <button onClick={handlePlay} className="">
        Play Sound
      </button>
    </div>
  );
};

export default BackgroundMusic;
