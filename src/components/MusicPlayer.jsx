import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY_ENABLED = "proposal_music_enabled";
const STORAGE_KEY_VOLUME = "proposal_music_volume";

export default function MusicPlayer({ src = "/song.mp3" }) {
  const audioRef = useRef(null);

  const initialEnabled = useMemo(() => {
    return localStorage.getItem(STORAGE_KEY_ENABLED) === "1";
  }, []);

  const initialVolume = useMemo(() => {
    const raw = localStorage.getItem(STORAGE_KEY_VOLUME);
    const n = raw ? Number(raw) : 0.6;
    if (Number.isFinite(n)) return Math.min(1, Math.max(0, n));
    return 0.6;
  }, []);

  const [enabled, setEnabled] = useState(initialEnabled);
  const [volume, setVolume] = useState(initialVolume);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ENABLED, enabled ? "1" : "0");
  }, [enabled]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_VOLUME, String(volume));
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;

    if (!enabled) {
      audioRef.current.pause();
      return;
    }

    audioRef.current
      .play()
      .then(() => setError(""))
      .catch(() => {
        setError("Tap play to start music (autoplay is blocked).");
      });
  }, [enabled, volume]);

  return (
    <div className="flex items-center gap-2">
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onError={() => setError("Song file not found. Add public/song.mp3 or set a valid URL.")}
      />

      <button
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all shadow-lg ${
          enabled
            ? "bg-primary text-white shadow-primary/30"
            : "bg-white/5 text-white/80 hover:bg-white/10"
        }`}
        type="button"
        onClick={() => {
          setEnabled((v) => !v);
          setError("");
        }}
        aria-label={enabled ? "Pause music" : "Play music"}
      >
        <span className="material-symbols-outlined text-xl">{enabled ? "pause" : "music_note"}</span>
      </button>

      <div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
        <span className="material-symbols-outlined text-[18px] text-white/70">volume_up</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 accent-[var(--tw-color-primary)]"
          aria-label="Music volume"
        />
      </div>

      {error ? <span className="hidden lg:inline text-xs text-white/50">{error}</span> : null}
    </div>
  );
}
