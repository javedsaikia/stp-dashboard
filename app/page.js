"use client";
import React, { useEffect, useMemo } from "react";

function Bubble({ size, left, duration, delay }) {
  const style = {
    width: size,
    height: size,
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    backgroundColor: "#4fd1c5",
  };
  return (
    <div
      className="absolute bottom-0 rounded-full opacity-70 animate-rise"
      style={style}
    />
  );
}

function BubbleField({ count = 18 }) {
  const bubbles = useMemo(() => {
    const vals = [];
    for (let i = 0; i < count; i++) {
      const size = 6 + ((i * 19) % 20);
      const left = (i * 37) % 100;
      const duration = 6 + ((i * 13) % 8);
      const delay = (i * 0.77) % 6;
      vals.push({ size, left, duration, delay });
    }
    return vals;
  }, [count]);
  return (
    <>
      {bubbles.map((b, idx) => (
        <Bubble key={idx} {...b} />
      ))}
    </>
  );
}

export default function Page() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes rise { from { transform: translateY(0); opacity: .0; }
                        15% { opacity: .8; }
                        to { transform: translateY(-105%); opacity: 0; } }
      .animate-rise { animation-name: rise; animation-timing-function: linear; animation-iteration-count: infinite; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative" style={{ width: 1234, height: 696 }}>
        <img
          src="/dashboard.png"
          alt="STP Dashboard"
          className="w-full h-full object-contain select-none pointer-events-none"
          draggable={false}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ left: 282, top: 520, width: 352, height: 128 }}>
            <div className="relative w-full h-full"><BubbleField count={28} /></div>
          </div>
          <div className="absolute" style={{ left: 381, top: 297, width: 128, height: 180 }}>
            <div className="relative w-full h-full"><BubbleField count={14} /></div>
          </div>
          <div className="absolute" style={{ left: 509, top: 297, width: 143, height: 180 }}>
            <div className="relative w-full h-full"><BubbleField count={12} /></div>
          </div>
          <div className="absolute" style={{ left: 652, top: 297, width: 130, height: 180 }}>
            <div className="relative w-full h-full"><BubbleField count={12} /></div>
          </div>
          <div className="absolute" style={{ left: 782, top: 297, width: 132, height: 180 }}>
            <div className="relative w-full h-full"><BubbleField count={12} /></div>
          </div>
          <div className="absolute" style={{ left: 914, top: 297, width: 152, height: 180 }}>
            <div className="relative w-full h-full"><BubbleField count={14} /></div>
          </div>
          <div className="absolute" style={{ left: 1066, top: 297, width: 122, height: 180 }}>
            <div className="relative w-full h-full"><BubbleField count={10} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
