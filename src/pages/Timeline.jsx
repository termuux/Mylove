import { useNavigate } from "react-router-dom";

export default function Timeline() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30 animate-fade-up">
      <section className="relative h-[70vh] min-h-[520px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 space-y-6">
          <h1 className="font-romantic text-7xl md:text-9xl text-white drop-shadow-2xl">Our Journey</h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            A walk through our most cherished moments, from the day our worlds collided to the beautiful forever we&apos;re building.
          </p>
          <div className="pt-12">
            <div className="animate-bounce flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
              <span className="material-symbols-outlined text-primary text-3xl">expand_more</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 max-w-6xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] timeline-gradient opacity-30" />

        <div className="space-y-32 relative">
          <div className="flex flex-col md:flex-row items-center justify-center w-full group">
            <div className="w-full md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
              <div className="glass p-8 rounded-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary/50">
                <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">Summer 2025</span>
                <h3 className="text-3xl font-bold mb-4">How We Met</h3>
                <p className="text-white/60 leading-relaxed">
                  It was hot sunny day when I layed my eyes on you, from that moment I knew I had to have you.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background-dark border-4 border-primary order-1 md:order-2 mb-8 md:mb-0">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            </div>
            <div className="hidden md:block w-1/2 pl-16 order-3" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full group">
            <div className="hidden md:block w-1/2 pr-16 text-right" />
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background-dark border-4 border-primary mb-8 md:mb-0">
              <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
            </div>
            <div className="w-full md:w-1/2 md:pl-16">
              <div className="glass p-8 rounded-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary/50">
                <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">June 2025</span>
                <h3 className="text-3xl font-bold mb-4">Our First Date</h3>
                <p className="text-white/60 leading-relaxed">
                  Lunch, a long walk under the stars, and conversation that lasted until the sun came up. I didn&apos;t want the night to end, and sparks flew in a way I&apos;d never felt before.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full group">
            <div className="w-full md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
              <div className="glass p-8 rounded-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary/50">
                <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">September 2025</span>
                <h3 className="text-3xl font-bold mb-4">The First Fight</h3>
                <p className="text-white/60 leading-relaxed">
                  Crying together. Releasing I can't stay mad at you. I love you so much.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background-dark border-4 border-primary order-1 md:order-2 mb-8 md:mb-0">
              <span className="material-symbols-outlined text-primary text-2xl">map</span>
            </div>
            <div className="hidden md:block w-1/2 pl-16 order-3" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full group">
            <div className="hidden md:block w-1/2 pr-16 text-right" />
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background-dark border-4 border-primary mb-8 md:mb-0">
              <span className="material-symbols-outlined text-primary text-2xl">home</span>
            </div>
            <div className="w-full md:w-1/2 md:pl-16">
              <div className="glass p-8 rounded-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary/50">
                <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">Forever</span>
                <h3 className="text-3xl font-bold mb-4">Jobs And Events</h3>
                <p className="text-white/60 leading-relaxed">
                Through every job and event, we&apos;ve grown stronger together. From the early days of struggle to the moments of celebration, every experience has brought us closer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-white/30">
        <p className="text-sm font-light uppercase tracking-widest">© Infinity Our Forever Story</p>
      </footer>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .timeline-gradient {
          background: linear-gradient(to bottom, #e8306e 0%, #e8306e 80%, rgba(232, 48, 110, 0) 100%);
        }
      `}</style>
    </div>
  );
}
