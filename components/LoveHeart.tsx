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
  "Azı olmazdı zaten... 🤍",
];

export default function LoveHeart() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);

    setMessage(
      messages[Math.floor(Math.random() * messages.length)]
    );
  }, []);

  return (
    <div className="my-12 flex flex-col items-center">

      <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-white">
        🤍 Bugün Seni Ne Kadar Seviyorum?
      </h2>

      <div
        className={`
          mt-8
          transition-all
          duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      >
        <div
          className="
            relative
            w-36
            h-36
            md:w-40
            md:h-40
            rounded-full
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/15
            flex
            items-center
            justify-center
            shadow-[0_0_40px_rgba(255,255,255,.12)]
          "
        >
          <div className="heartbeat text-[70px] md:text-[78px]">
            🤍
          </div>

          <span
            className="
              absolute
              text-[#081229]
              font-black
              text-lg
              md:text-xl
            "
          >
            100%
          </span>
        </div>
      </div>

     <p className="mt-5 text-sm italic text-gray-400 tracking-wide text-center">
  {message}
</p>
    </div>
  );
}
