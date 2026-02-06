import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginWithDate } from "../lib/auth.js";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const from = useMemo(() => {
    const stateFrom = location.state?.from;
    return typeof stateFrom === "string" && stateFrom.startsWith("/") ? stateFrom : "/";
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-white overflow-hidden">
      <div className="fixed inset-0 z-0" style={{ background: "radial-gradient(circle at center, #3a1d27 0%, #211116 100%)" }} />
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, transparent 20%, rgba(33, 17, 22, 0.85) 100%)" }}
      />

      <div className="relative z-30 flex h-screen w-full flex-col">
        <header className="flex items-center justify-between px-8 py-8 md:px-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-60">Our Journey</span>
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <div className="mb-6 flex justify-center">
              <span className="material-symbols-outlined text-primary text-5xl opacity-80">lock</span>
            </div>

            <p className="text-primary font-medium tracking-[0.3em] uppercase mb-3 text-xs">Private</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Enter our anniversary date</h1>
            <p className="text-white/60 text-sm mb-8">This space is just for you.</p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setError("");

                const ok = loginWithDate(date);
                if (!ok) {
                  setError("That date doesn’t match. Please try again.");
                  return;
                }

                navigate(from, { replace: true });
              }}
            >
              <div className="text-left">
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2" htmlFor="anniv">
                  Anniversary Date
                </label>
                <input
                  className="w-full rounded-full h-12 px-5 bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary"
                  id="anniv"
                  name="anniv"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <button
                className="w-full flex items-center justify-center rounded-full h-12 px-10 bg-primary text-white text-base font-bold transition-all hover:scale-[1.01] active:scale-[0.99]"
                type="submit"
              >
                Unlock
              </button>

              {error ? <p className="text-sm text-red-300">{error}</p> : null}

              <p className="text-[11px] text-white/35">Format: YYYY-MM-DD</p>
            </form>
          </div>
        </main>

        <footer className="flex flex-col items-center gap-3 py-10">
          <p className="text-xs tracking-widest uppercase opacity-30">Forever starts today</p>
        </footer>
      </div>
    </div>
  );
}
