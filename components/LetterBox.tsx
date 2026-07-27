"use client";

import { useEffect, useState } from "react";

type LetterBoxProps = {
  storageKey: string;
};

export default function LetterBox({ storageKey }: LetterBoxProps) {
  const [letter, setLetter] = useState("");
  const [saved, setSaved] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const savedLetter = localStorage.getItem(storageKey);

    if (savedLetter) {
      setLetter(savedLetter);
    }
  }, [storageKey]);

  function saveLetter() {
    localStorage.setItem(storageKey, letter);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  return (
    <div className="mt-6">

      {!opened ? (

        <div className="flex flex-col items-center justify-center py-10 sm:py-12">

          <div className="text-6xl sm:text-8xl mb-6 animate-bounce">
            ✉️
          </div>

          <button
            onClick={() => setOpened(true)}
            className="
              w-full
              sm:w-auto
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
            p-5
            sm:p-10
            transition-all
            duration-700
          "
        >

          <h3 className="text-2xl sm:text-3xl text-gray-800 font-serif mb-6">
            💌 Sevgili Damla,
          </h3>

          <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            placeholder="Bugün sana kalbimden geçenleri yazıyorum..."
            className="
              w-full
              h-64
              sm:h-96
              bg-transparent
              text-gray-800
              text-base
              sm:text-xl
              leading-8
              sm:leading-10
              outline-none
              resize-none
              font-serif
              placeholder:text-gray-500
            "
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-8">

            <div>

              <p className="italic text-gray-700 text-base sm:text-lg">
                Seni çok seven,
              </p>

              <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 mt-2">
                Uğur 🤍
              </h3>

            </div>

            <button
              onClick={saveLetter}
              className="
                w-full
                sm:w-auto
                bg-pink-500
                hover:bg-pink-600
                transition
                duration-300
                hover:scale-105
                px-7
                py-3
                rounded-xl
                text-white
                font-semibold
                shadow-lg
              "
            >
              💾 Kaydet
            </button>

          </div>

          {saved && (
            <p className="text-green-600 mt-5 font-semibold text-center">
              ✅ Mektubun kaydedildi.
            </p>
          )}

        </div>

      )}

    </div>
  );
}
