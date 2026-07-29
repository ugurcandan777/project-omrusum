"use client";

import { useEffect, useState } from "react";

const messages = [
  "İlk günkü gibi seviyorum...",
  "Bugün de sana yeniden âşık oldum.",
  "Sen benim en güzel tesadüfümsün.",
  "İyi ki varsın Ömrüşüm. 🤍",
  "Kalbim hep sana ait.",
  "Sonsuza kadar sen...",
  "Bir ömür yetmez sana.",
  "Azı olmazdı zaten... ❤️",
];

export default function LoveHeart() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);

    setMessage(
      messages[Math.floor(Math.random() * messages.length)]
    );
  }, []);

  return (
    <section className="my-16 flex flex-col items-center">

      <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
        🤍 Bugün Seni Ne Kadar Seviyorum?
      </h2>

      <div
        className={`
          relative
          mt-10
          transition-all
          duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
      >

        {/* Arka Glow */}
        <div
          className="
            absolute
            inset-0
            blur-3xl
            bg-white/10
            rounded-full
            scale-125
          "
        />

        {/* Parıltılar */}
        <span className="absolute -top-3 left-3 text-xl animate-pulse">
          ✨
        </span>

        <span
          className="
            absolute
            right-1
            top-5
            text-sm
            animate-bounce
          "
        >
          ✨
        </span>

        <span
          className="
            absolute
            -bottom-2
            left-8
            text-lg
            animate-pulse
          "
        >
          ✨
        </span>

        {/* Kalp */}
        <div className="heartbeat relative select-none">

          <div
            className="
              text-[105px]
              md:text-[125px]
              drop-shadow-[0_0_30px_rgba(255,255,255,.25)]
            "
          >
            🤍
          </div>

          <span
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              font-black
              tracking-widest
              text-[#081229]
              text-xl
              md:text-2xl
            "
          >
            D 🤍 U
          </span>

        </div>

      </div>

      <div className="mt-6 flex items-center gap-2">

        <span className="text-gray-400 text-sm tracking-wide">
          Sevgi Seviyesi
        </span>

        <span className="font-bold text-white text-xl">
          %100
        </span>

      </div>

      <p
        className="
          mt-6
          max-w-sm
          text-center
          italic
          text-gray-400
          leading-8
          text-sm
        "
      >
        {message}
      </p>

    </section>
  );
}
