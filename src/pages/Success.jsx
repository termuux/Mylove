import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function pad2(n) {
  return String(n).padStart(2, "0");
}

export default function Success() {
  const navigate = useNavigate();

  const particles = useMemo(() => {
    const colors = ["#e8306e", "#ffffff", "#f472b6", "#fb7185", "#fda4af"];
    const items = [];
    const count = 46;

    for (let i = 0; i < count; i += 1) {
      const isHeart = i % 5 === 0;
      const left = Math.random() * 100;
      const delay = Math.random() * 2.5;
      const duration = 5.5 + Math.random() * 4.5;
      const size = isHeart ? 16 + Math.random() * 22 : 8 + Math.random() * 10;
      const rotate = Math.random() * 360;
      const opacity = 0.45 + Math.random() * 0.4;
      const drift = (Math.random() - 0.5) * 120;
      const color = colors[Math.floor(Math.random() * colors.length)];

      items.push({
        id: i,
        isHeart,
        left,
        delay,
        duration,
        size,
        rotate,
        opacity,
        drift,
        color,
      });
    }

    return items;
  }, []);

  const target = useMemo(() => {
    const now = new Date();
    const year = now.getMonth() > 1 || (now.getMonth() === 1 && now.getDate() > 14) ? now.getFullYear() + 1 : now.getFullYear();
    return new Date(year, 1, 14, 0, 0, 0, 0);
  }, []);

  const [remaining, setRemaining] = useState(() => Math.max(0, target.getTime() - Date.now()));

  useEffect(() => {
    const t = setInterval(() => {
      setRemaining(Math.max(0, target.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(t);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 animate-fade-up">
      <div className="relative flex min-h-[calc(100vh-73px)] w-full flex-col overflow-x-hidden celebration-bg">
        <div className="absolute inset-0 confetti-overlay opacity-40 pointer-events-none" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className={p.isHeart ? "particle-heart" : "particle-confetti"}
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                opacity: p.opacity,
                transform: `translate3d(0, -20px, 0) rotate(${p.rotate}deg)`,
                width: p.isHeart ? `${p.size}px` : undefined,
                height: p.isHeart ? `${p.size}px` : undefined,
                background: p.isHeart ? undefined : p.color,
                color: p.color,
                ['--drift']: `${p.drift}px`,
              }}
            >
              {p.isHeart ? (
                <span className="material-symbols-outlined" style={{ fontSize: p.size, lineHeight: 1 }}>
                  favorite
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center max-w-4xl mx-auto z-10">
          

          <h1 className="font-script text-primary text-7xl md:text-9xl mb-4 text-glow leading-none">She Said Yes!</h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12 max-w-lg mx-auto">
            The most beautiful chapter of our story begins today.
          </p>

          <div className="w-full max-w-2xl px-6 py-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-8">Next Milestone: Valentine&apos;s Day</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_25px_rgba(232,48,110,0.4)]">
                  <span className="text-3xl font-bold">{days}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-400">Days</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/40 bg-white/5 text-primary">
                  <span className="text-3xl font-bold">{pad2(hours)}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-400">Hours</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/40 bg-white/5 text-primary">
                  <span className="text-3xl font-bold">{pad2(mins)}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-400">Mins</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/40 bg-white/5 text-primary">
                  <span className="text-3xl font-bold">{pad2(secs)}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-400">Secs</span>
              </div>
            </div>
          </div>

          

          <div className="mt-12 flex flex-col gap-6">
            <button
              className="px-10 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-primary/25"
              type="button"
              onClick={() => navigate("/timeline")}
            >
              Relive Our Journey
            </button>
            <p className="text-slate-500 text-sm italic">Sharing the love since July 2025</p>
          </div>
        </main>

        <footer className="flex items-center justify-center p-8 mt-auto z-10">
          <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">Forever &amp; Always</span>
            <span className="material-symbols-outlined text-primary text-sm leading-none">favorite</span>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">Saugat &amp; Anusha</span>
          </div>
        </footer>

        <style>{`
          .celebration-bg {
            background: radial-gradient(circle at center, rgba(232, 48, 110, 0.15) 0%, rgba(18, 8, 11, 1) 70%);
          }
          .text-glow {
            text-shadow: 0 0 20px rgba(232, 48, 110, 0.5);
          }
          .confetti-overlay {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDNxh78nFhoLuRHx8c2FMsi63kGX2YH2DHoa4QgyXQszthi41shG6DLjczlla3jmdLjuJlGboIKrgfsJ_MguhC1OXMq4oJ1uBul8i1CNBrvbqdtBqujgBoFjMUohO6_jF6euloVh0JmHL-INKXy0bfLtx41EHj5Q4vxR_VWQFY5sB_WZenIEeJfr8cr-0EnLjAMghm7e_3ZHkmSqRGOtnwUBiMxR7mDIjjZXElUr_kRwsWBt3q8COpmbmuubJVl24RuW65dlffqTaTO);
          }

          @keyframes fall {
            0% {
              transform: translate3d(0, -30px, 0) rotate(0deg);
              filter: blur(0px);
            }
            100% {
              transform: translate3d(var(--drift, 0px), calc(100vh + 120px), 0) rotate(360deg);
              filter: blur(0.2px);
            }
          }

          .particle-confetti {
            position: absolute;
            top: -40px;
            width: 10px;
            height: 14px;
            border-radius: 3px;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            box-shadow: 0 0 18px rgba(232, 48, 110, 0.18);
          }

          .particle-heart {
            position: absolute;
            top: -60px;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            text-shadow: 0 0 18px rgba(232, 48, 110, 0.35);
          }
        `}</style>
      </div>
    </div>
  );
}
