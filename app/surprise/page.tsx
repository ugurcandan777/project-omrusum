"use client";

import { useEffect, useState } from "react";

export default function SurprisePage() {
  const unlockDate = new Date("2026-08-05T00:00:00");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = unlockDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Hazır 🤍");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
      );

      setTimeLeft(
        `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unlocked = new Date() >= unlockDate;

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#050B1D] via-[#081229] to-[#020611] text-white px-6">
        <div className="glass max-w-xl w-full rounded-[40px] p-10 text-center">
          <div className="text-8xl mb-8 animate-pulse">🎁</div>

          <h1 className="text-4xl font-bold">Sürprizimiz</h1>

          <p className="mt-6 text-gray-300 leading-8">
            Bu sayfa henüz açılmadı...
            <br />
            5 Ağustos geldiğinde seni bekleyen çok özel bir sürpriz olacak. 🤍
          </p>

          <div className="mt-10">
            <div className="text-sm uppercase tracking-[4px] text-gray-400">
              Kalan Süre
            </div>

            <div className="mt-4 text-2xl font-bold text-pink-300">
              {timeLeft}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020611] text-white">
      <div className="text-center">
        <div className="text-8xl mb-8">🤍</div>

        <h1 className="text-5xl font-bold">
          Sürpriz Açıldı
        </h1>

        <p className="mt-6 text-gray-300">
          Buraya 5 Ağustos sürprizimizi koyacağız.
        </p>
      </div>
    </main>
  );
}
