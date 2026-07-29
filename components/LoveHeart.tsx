"use client";

import { useEffect, useState } from "react";

const messages = [
  "Azı olmazdı zaten... 🤍",
  "Bugün de ilk günkü gibi...",
  "Her gün biraz daha...",
  "Sonsuza kadar %100 ❤️",
];

export default function LoveHeart() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 150);

    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, []);

  return (
    <div className="my-10 flex flex-col items-center">

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-5">
        🤍 Bugün Seni Ne Kadar Seviyorum?
      </h2>

      <div
        className={`
          relative
          transition-all
          duration-700
          ${show ? "scale-100 opacity-100" : "scale-50 opacity-0"}
        `}
      >
        <div
          className="
            text-[90px]
            md:text-[110px]
            heartbeat
            drop-shadow-[0_0_25px_rgba(236,72,153,.55)]
            select-none
          "
        >
          ❤️
        </div>

        <span
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-white
            font-extrabold
            text-xl
            md:text-2xl
          "
        >
          100%
        </span>
      </div>

      <p className="mt-5 italic text-pink-200 text-center">
        {message}
      </p>

    </div>
  );
} 