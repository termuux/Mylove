import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-73px)] bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden animate-fade-up">
      <div className="fixed inset-0 -z-10 gradient-bg opacity-50 dark:opacity-100" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <span
          className="material-symbols-outlined absolute text-primary/30 floating top-[15%] left-[10%] text-6xl"
          style={{ animationDelay: "0s" }}
        >
          favorite
        </span>
        <span
          className="material-symbols-outlined absolute text-primary/20 floating top-[70%] left-[15%] text-4xl"
          style={{ animationDelay: "1s" }}
        >
          auto_awesome
        </span>
        <span
          className="material-symbols-outlined absolute text-primary/40 floating top-[20%] right-[12%] text-5xl"
          style={{ animationDelay: "2s" }}
        >
          favorite
        </span>
        <span
          className="material-symbols-outlined absolute text-primary/20 floating top-[65%] right-[10%] text-7xl"
          style={{ animationDelay: "1.5s" }}
        >
          stethoscope_arrow
        </span>
      </div>

      <main className="flex items-center justify-center p-6">
        <div className="glass max-w-3xl w-full p-8 md:p-16 rounded-xl md:rounded-lg text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-5xl animate-float-soft">favorite</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-romantic text-5xl md:text-7xl text-primary leading-tight">Our Little Universe</h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                A cozy timeline of us — the laughs, the late-night talks, and the moments that made me fall deeper.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
              <button
                className="pulse-soft flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/40 hover:scale-105 transition-transform"
                type="button"
                onClick={() => navigate("/timeline")}
              >
                <span className="truncate">Start Our Story</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="flex justify-center gap-6 mt-8 w-full">
              <button
                type="button"
                onClick={() => navigate("/timeline")}
                className="flex-1 max-w-[180px] flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">auto_stories</span>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest opacity-90">Memories</span>
              </button>
              
              <button
                type="button"
                onClick={() => navigate("/gallery")}
                className="flex-1 max-w-[180px] flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">explore</span>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest opacity-90">Journey</span>
              </button>
            </div>
          </div>
        </div>
      </main>


      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .dark .glass {
          background: rgba(33, 17, 22, 0.6);
          border: 1px solid rgba(232, 48, 110, 0.2);
        }
        .gradient-bg {
          background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
        }
        .dark .gradient-bg {
          background: linear-gradient(135deg, #211116 0%, #472430 100%);
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .pulse-soft {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-ring {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
