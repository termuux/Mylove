import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../lib/auth.js";

function linkClass({ isActive }) {
  return `text-sm font-semibold transition-colors ${
    isActive ? "text-primary" : "text-white/70 hover:text-primary"
  }`;
}

export default function TopNav() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-primary/20 p-2 text-primary">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="leading-tight">
            <h2 className="text-lg font-extrabold tracking-tight text-white">Our Journey</h2>
            <p className="hidden sm:block text-[11px] tracking-widest uppercase text-white/50">Saugat &amp; Anusha</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClass} end>
            Landing
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            Timeline
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition-all"
            type="button"
            onClick={() => navigate("/notifications")}
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(232,48,110,0.6)]" />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition-all"
            type="button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
              } else {
                navigator.clipboard?.writeText(window.location.href).catch(() => {});
              }
            }}
            aria-label="Share"
          >
            <span className="material-symbols-outlined text-xl">share</span>
          </button>

          <button
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
            type="button"
            onClick={() => {
              logout();
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
