import { useNavigate } from "react-router-dom";

export default function Question() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-73px)] bg-background-light dark:bg-background-dark font-display text-white overflow-hidden animate-fade-up">
      <div
        className="fixed inset-0 z-0"
        style={{ background: "radial-gradient(circle at center, #3a1d27 0%, #211116 100%)" }}
      />
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, transparent 20%, rgba(33, 17, 22, 0.8) 100%)" }}
      />

      <div className="fixed top-12 left-12 text-primary opacity-30 z-20 hidden md:block">
        <span className="material-symbols-outlined text-6xl">favorite</span>
      </div>
      <div className="fixed top-24 left-32 text-primary opacity-10 z-20 hidden md:block">
        <span className="material-symbols-outlined text-3xl">favorite</span>
      </div>
      <div className="fixed bottom-12 right-12 text-primary opacity-30 z-20 hidden md:block">
        <span className="material-symbols-outlined text-6xl">favorite</span>
      </div>
      <div className="fixed bottom-24 right-32 text-primary opacity-10 z-20 hidden md:block">
        <span className="material-symbols-outlined text-3xl">favorite</span>
      </div>
      <div className="fixed top-1/4 right-20 text-primary opacity-10 z-20 hidden md:block">
        <span className="material-symbols-outlined text-4xl">favorite</span>
      </div>
      <div className="fixed bottom-1/4 left-20 text-primary opacity-10 z-20 hidden md:block">
        <span className="material-symbols-outlined text-4xl">favorite</span>
      </div>

      <div className="relative z-30 flex min-h-[calc(100vh-73px)] w-full flex-col">
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="max-w-2xl">
            <div className="mb-6 flex justify-center">
              <span className="material-symbols-outlined text-primary text-5xl opacity-80">favorite</span>
            </div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">A Promise Forever</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 drop-shadow-lg">Will you marry me?</h1>
            <p className="text-white/60 text-lg mb-12 max-w-md mx-auto leading-relaxed">
              I don’t want a future without you in it. If you’ll let me, I’ll choose you — every day — for the rest of my life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                className="glow-effect flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-16 px-10 bg-primary text-white text-xl font-bold transition-all hover:scale-105 active:scale-95"
                type="button"
                onClick={() => navigate("/valentine")}
              >
                <span>Yes</span>
              </button>
              <button
                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-16 px-10 bg-white/5 border border-white/10 text-white/60 text-lg font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                type="button"
                onClick={() => navigate("/timeline")}
              >
                <span>No</span>
              </button>
            </div>
          </div>
        </main>

        <footer className="flex flex-col items-center gap-4 py-12">
          <div className="flex gap-6 opacity-40">
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-xl">camera_alt</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-xl">music_note</span>
            </a>
          </div>
          <p className="text-xs tracking-widest uppercase opacity-30">Forever starts today • 2024</p>
        </footer>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <style>{`
        .glow-effect {
          box-shadow: 0 0 30px 5px rgba(232, 48, 110, 0.4);
        }
      `}</style>
    </div>
  );
}
