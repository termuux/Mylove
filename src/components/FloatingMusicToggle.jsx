import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY_MUTED = "proposal_music_muted";

export default function FloatingMusicToggle({ src = "/song.mp3" }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Load initial state from localStorage
    const savedMuted = localStorage.getItem(STORAGE_KEY_MUTED);
    if (savedMuted !== null) {
      setMuted(savedMuted === "true");
    }

    // Initialize audio
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;
    audio.muted = true; // Start muted by default
    audioRef.current = audio;

    // Try to autoplay (works when muted on most browsers)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log('Autoplay prevented');
      });
    }

    // Cleanup
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    const newMuted = !muted;
    setMuted(newMuted);
    audioRef.current.muted = newMuted;
    localStorage.setItem(STORAGE_KEY_MUTED, String(newMuted));
    
    if (!hasInteracted) {
      setHasInteracted(true);
      // Try to unmute if this is the first interaction
      if (newMuted === false) {
        audioRef.current.play().catch(e => console.log('Play failed:', e));
      }
    }
  };

  return (
    <button
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg hover:bg-pink-100/20 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      onClick={toggleMute}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={muted ? 'Unmute music' : 'Mute music'}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span className={`absolute transition-all duration-300 ${muted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <span className="material-symbols-outlined text-2xl text-pink-500 group-hover:text-pink-400">
            volume_off
          </span>
        </span>
        <span className={`absolute transition-all duration-300 ${!muted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
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
