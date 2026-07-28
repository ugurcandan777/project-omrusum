"use client";

import { useState } from "react";

type LetterBoxProps = {
  children: React.ReactNode;
};

export default function LetterBox({ children }: LetterBoxProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mt-6">

      {!opened ? (

        <div className="flex flex-col items-center justify-center py-12">

          <div className="text-7xl mb-6 animate-bounce">
            ✉️
          </div>

          <button
            onClick={() => setOpened(true)}
            className="
              bg-pink-500
              hover:bg-pink-600
              transition
              duration-300
              hover:scale-105
              px-8
              py-3
              rounded-xl
              text-white
              font-semibold
              shadow-lg
            "
          >
            💌 Mektubu Aç
          </button>

        </div>

      ) : (

        <div
          className="
            bg-[#fdf6e3]
            rounded-3xl
            border-2
            border-[#d8c39a]
            shadow-2xl
            p-8
            text-gray-800
            font-serif
            leading-9
            whitespace-pre-wrap
          "
        >
          {children}

          <div className="mt-10 border-t border-gray-300 pt-6">

            <p className="italic text-lg">
              Seni çok seven,
            </p>

            <h3 className="text-3xl mt-2">
              Uğur 🤍
            </h3>

          </div>

        </div>

      )}

    </div>
  );
}

