import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-73px)] bg-background-light dark:bg-background-dark text-white animate-fade-up">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Notifications</h1>
          <p className="text-white/60 mt-2">One new message waiting for you.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <button
            type="button"
            className="w-full text-left px-5 py-4 hover:bg-white/5 transition-colors"
            onClick={() => navigate("/valentine")}
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">priority_high</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-base font-semibold text-white">Seen urgently</p>
                  <span className="text-[11px] text-white/40">now</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Tap to open.</p>
              </div>

              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(232,48,110,0.6)]" />
            </div>
          </button>
        </div>

        <div className="mt-10">
          <button
            type="button"
            className="rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
