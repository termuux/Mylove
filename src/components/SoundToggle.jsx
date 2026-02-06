import { useState, useEffect } from 'react';

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [audio, setAudio] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize audio
    const bgMusic = new Audio('/path-to-your-romantic-music.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    setAudio(bgMusic);

    // Try to autoplay (muted by default)
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented, handle it here
        console.log('Autoplay prevented');
      });
    }

    // Cleanup
    return () => {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <button
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg hover:bg-pink-100/20 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      onClick={toggleMute}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span className={`absolute transition-all duration-300 ${isMuted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <span className="material-symbols-outlined text-2xl text-pink-500 group-hover:text-pink-400">
            volume_off
          </span>
        </span>
        <span className={`absolute transition-all duration-300 ${!isMuted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <span className="material-symbols-outlined text-2xl text-pink-500 group-hover:text-pink-400">
            favorite
          </span>
        </span>
      </div>
      
      {/* Animated hearts on hover */}
      {isHovered && (
        <>
          <span className="absolute -top-2 -right-2 text-xs text-pink-400 animate-float-up">
            ♥
          </span>
          <span className="absolute -top-3 -right-3 text-sm text-pink-500 animate-float-up animation-delay-100">
            ♥
          </span>
        </>
      )}
      <style jsx>{`
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(5px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-5px); }
        }
        .animate-float-up {
          animation: float-up 1s ease-in-out infinite;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </button>
  );
}
