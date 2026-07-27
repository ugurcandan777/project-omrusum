"use client";

import { useEffect, useState } from "react";

type NoteBoxProps = {
  storageKey: string;
};

export default function NoteBox({ storageKey }: NoteBoxProps) {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedNote = localStorage.getItem(storageKey);

    if (savedNote) {
      setNote(savedNote);
    }
  }, [storageKey]);

  function saveNote() {
    localStorage.setItem(storageKey, note);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  return (
    <div className="mt-8">

      <div
        className="
          bg-[#fdf6e8]
          border
          border-[#e6d3a3]
          rounded-3xl
          shadow-2xl
          p-5
          sm:p-8
          transition
          duration-300
          hover:shadow-yellow-300/20
        "
      >

        <div className="mb-6">

          <h3 className="text-xl sm:text-2xl text-gray-800 font-serif">
            💌 Sevgili Damla,
          </h3>

        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Bugün sana içimden geçenleri yazıyorum..."
          className="
            w-full
            h-56
            sm:h-72
            bg-transparent
            text-gray-800
            text-base
            sm:text-lg
            leading-8
            sm:leading-10
            outline-none
            resize-none
            placeholder:text-gray-500
            font-serif
          "
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-8">

          <div>

            <p className="text-gray-700 italic text-base sm:text-lg">
              Seni çok seven,
            </p>

            <p className="text-xl sm:text-2xl text-gray-800 font-serif mt-1">
              Uğur 🤍
            </p>

          </div>

          <button
            onClick={saveNote}
            className="
              w-full
              sm:w-auto
              bg-gradient-to-r
              from-pink-500
              to-rose-500
              hover:scale-105
              transition
              duration-300
              px-7
              py-3
              rounded-xl
              font-semibold
              text-white
              shadow-lg
            "
          >
            💾 Kaydet
          </button>

        </div>

        {saved && (
          <p className="text-green-600 mt-5 text-center font-semibold">
            ✅ Mektubun başarıyla kaydedildi.
          </p>
        )}

      </div>

    </div>
  );
}
