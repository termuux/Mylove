import { useEffect, useState } from 'react';

const FloatingHearts = ({ count = 15 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
      size: `${8 + Math.random() * 8}px`,
      opacity: 0.2 + Math.random() * 0.5,
    }));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        const newHeart = {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 20}s`,
          delay: '0s',
          size: `${8 + Math.random() * 8}px`,
          opacity: 0.2 + Math.random() * 0.5,
        };
        // Keep the array to a reasonable size
        return [...prevHearts.slice(-count), newHeart];
      });
    }, 2000); // Add a new heart every 2 seconds

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-400 animate-float-up z-10"
          style={{
            left: heart.left,
            bottom: '-20px',
            animationDuration: heart.animationDuration,
            animationDelay: heart.delay,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
        >
          ♥
        </div>
      ))}
      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: ${0.2 + Math.random() * 0.5};
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
