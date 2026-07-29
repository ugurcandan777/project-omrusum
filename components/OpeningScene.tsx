"use client";

import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

const scenes = [
  "Bir gün...",
  "İki yabancı insan...",
  "Birbirini tanıdı.",
  "Sonra...",
  "Birbirlerinin evi oldular. 🤍",
  "Ve şimdi...",
  "Sana uzun zamandır hazırladığım küçük dünyaya hoş geldin.",
];

export default function OpeningScene({ onFinish }: Props) {
  const [step, setStep] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (step >= scenes.length) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 1200);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 2600);

    return () => clearTimeout(timer);
  }, [step]);

  function handleOpen() {
    if ("vibrate" in navigator) {
      navigator.vibrate(40);
    }

    setFlash(true);

    setTimeout(() => {
      onFinish();
    }, 900);
  }

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-[#020611]">

      {/* Işıklar */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-120px] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[160px]" />

      {/* Büyük Kalp */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
            heartbeat
            text-[280px]
            md:text-[420px]
            opacity-[0.04]
            select-none
          "
        >
          🤍
        </div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">

        {!showButton ? (
          <>
            <div className="heartbeat text-7xl mb-10">
              🤍
            </div>

            <h1
              key={step}
              className="
                animate-fade-in
                text-3xl
                md:text-5xl
                font-semibold
                leading-relaxed
                max-w-3xl
              "
            >
              {scenes[Math.min(step, scenes.length - 1)]}
            </h1>
          </>
        ) : (
          <div className="animate-fade-in">

            <div className="text-8xl heartbeat mb-8">
              🎁
            </div>

            <h2 className="text-5xl font-bold">
              Hazır mısın?
            </h2>

            <p className="mt-6 text-gray-300 leading-8 max-w-xl mx-auto">
              Bundan sonrası sadece ikimize ait...
              <br />
              Haydi birlikte açalım. 🤍
            </p>

            <button
              onClick={handleOpen}
              className="
                mt-12
                px-10
                py-5
                rounded-full
                bg-white
                text-[#081229]
                font-bold
                text-lg
                shadow-[0_0_40px_rgba(255,255,255,.25)]
                hover:scale-105
                active:scale-95
                transition-all
                duration-500
              "
            >
              🤍 Sürprizi Aç
            </button>

          </div>
        )}

      </div>

      {/* Beyaz geçiş efekti */}
      <div
        className={`
          fixed
          inset-0
          bg-white
          pointer-events-none
          transition-opacity
          duration-700
          ${flash ? "opacity-100" : "opacity-0"}
        `}
      />

    </div>
  );
}
