"use client";

import { useEffect, useState } from "react";

export default function CountdownPage() {
  const startDate = new Date("2025-01-01T00:00:00");

  const messages = [
    "Bugün de seni dünden daha çok seviyorum. 🤍",
    "İyi ki hayatımdasın. ❤️",
    "Gülüşün en sevdiğim manzara.",
    "Her gün seninle yeniden aşık oluyorum.",
    "Bizim hikâyemiz daha yeni başlıyor...",
    "Seninle geçen her saniye en güzel hatıram.",
    "Birlikte yaşlanacağımız günleri sabırsızlıkla bekliyorum.",
    "Kalbimin en güzel köşesi hep senin.",
  ];

  const [message, setMessage] = useState("");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const interval = setInterval(() => {
      const now = new Date();

      const diff = now.getTime() - startDate.getTime();

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (diff % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (diff % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (diff % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { icon: "❤️", value: time.days, label: "Gün" },
    { icon: "⏰", value: time.hours, label: "Saat" },
    { icon: "🕒", value: time.minutes, label: "Dakika" },
    { icon: "✨", value: time.seconds, label: "Saniye" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050B1D] via-[#0A1E47] to-[#020611] text-white px-4 py-8 sm:px-8">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
          Damla
          <span className="mx-2 sm:mx-4 animate-pulse">❤️</span>
          Uğur
        </h1>

        <h2 className="text-2xl sm:text-4xl font-semibold mt-6">
          Birlikte Geçirdiğimiz Zaman
        </h2>

        <p className="text-pink-300 italic text-lg sm:text-xl mt-4">
          1 Ocak 2025'ten beri...
        </p>

        <div className="text-2xl sm:text-3xl mt-5">
          ✨ ✨ ✨
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-12">

          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-4">
                {card.icon}
              </div>

              <div className="text-5xl sm:text-7xl font-bold">
                {card.value}
              </div>

              <div className="mt-4 text-base sm:text-xl text-gray-300">
                {card.label}
              </div>
            </div>
          ))}

        </div>

        <div className="mt-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-xl">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            💖 {message}
          </h2>

          <p className="text-base sm:text-lg leading-8 sm:leading-9 text-gray-300">
            1 Ocak 2025'te başlayan hikâyemiz,
            her gün yeni bir tebessüm,
            yeni bir umut ve birlikte kurduğumuz
            güzel hayallerle büyümeye devam ediyor.
          </p>

          <div className="mt-8 border-t border-white/20 pt-6">

            <p className="italic text-pink-200 text-lg sm:text-xl leading-8">
              "Bu sayaç durmayacak...
              Çünkü seni sevmekten vazgeçmeyeceğim."
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
