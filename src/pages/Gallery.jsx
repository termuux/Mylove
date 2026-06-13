import { useEffect } from "react";

export default function Gallery() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Our <span className="text-primary italic">Gallery</span>
          </h1>
          <p className="text-slate-500 dark:text-primary/70 text-lg font-medium max-w-2xl mx-auto">
            A journey of a thousand memories, one story at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Date */}
          <div className="glass-frame rounded-xl p-3 flex flex-col group">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Our first date"
                src="/pictures/firstdatepic.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-primary/80 px-2 py-1 rounded-full">June 7,2025</span>
              </div>
            </div>
            <h3 className="text-lg font-bold px-2">First Date</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 px-2 pb-2">The beginning of our beautiful journey together.</p>
          </div>

          {/* Birthday */}
          <div className="glass-frame rounded-xl p-3 flex flex-col group">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Birthday celebration"
                src="/pictures/birthdaypic.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-primary/80 px-2 py-1 rounded-full">Jan 21, 2025</span>
              </div>
            </div>
            <h3 className="text-lg font-bold px-2">Birthday Surprise</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 px-2 pb-2">Celebrating your special day in style.</p>
          </div>

          {/* Her Favorite */}
          <div className="glass-frame rounded-xl p-3 flex flex-col group">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Her favorite picture of me"
                src="/pictures/cutestpicaccordingtoher.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-primary/80 px-2 py-1 rounded-full">Her Favorite</span>
              </div>
            </div>
            <h3 className="text-lg font-bold px-2">Her Favorite</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 px-2 pb-2">"The cutest you've ever looked," she said.</p>
          </div>

          {/* My Favorite */}
          <div className="glass-frame rounded-xl p-3 flex flex-col group">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="My favorite picture of her"
                src="/pictures/cutestpicofher.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-primary/80 px-2 py-1 rounded-full">My Favorite</span>
              </div>
            </div>
            <h3 className="text-lg font-bold px-2">My Favorite</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 px-2 pb-2">That smile that brightens my darkest days.</p>
          </div>

          {/* Cutest Pic According to Me */}
          <div className="glass-frame rounded-xl p-3 flex flex-col group">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Cutest picture according to me"
                src="/pictures/cutestpicaccordingtome.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-primary/80 px-2 py-1 rounded-full">My Pick</span>
              </div>
            </div>
            <h3 className="text-lg font-bold px-2">Perfect Moment</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 px-2 pb-2">This moment captured my heart forever.</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .glass-frame {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(232, 48, 110, 0.15);
          transition: all 0.3s ease;
        }
        .glass-frame:hover {
          background: rgba(232, 48, 110, 0.08);
          border-color: rgba(232, 48, 110, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(232, 48, 110, 0.15);
        }
      `}</style>
    </div>
  );
}
