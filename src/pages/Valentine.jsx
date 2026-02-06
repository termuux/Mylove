import { useNavigate } from "react-router-dom";

export default function Valentine() {
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

      <main className="relative z-20 flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 text-center shadow-2xl">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[0_0_30px_rgba(232,48,110,0.25)]">
              <span className="material-symbols-outlined text-4xl">favorite</span>
            </div>
          </div>

          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">A Secret Message</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Will you be my valentine baby?</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
            I have something special planned for us. Say yes and let’s make this Valentine’s unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              type="button"
              className="w-full sm:w-auto min-w-[220px] rounded-full bg-primary px-10 py-4 text-lg font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.99] transition-all"
              onClick={() => navigate("/success")}
            >
              Yes
            </button>

            <button
              type="button"
              className="w-full sm:w-auto min-w-[220px] rounded-full bg-pink-600/90 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-pink-600/25 hover:bg-pink-500 hover:scale-[1.02] active:scale-[0.99] transition-all"
              onClick={() => navigate("/success")}
            >
              Duh, obviously!
            </button>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="text-sm font-semibold text-white/60 hover:text-primary transition-colors"
              onClick={() => navigate("/notifications")}
            >
              Back to notifications
            </button>
          </div>
        </div>
      </main>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed -bottom-48 -left-48 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </div>
  );
}
