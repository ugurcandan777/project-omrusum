"use client";

import LetterBox from "@/components/LetterBox";

const letters = [
  {
    title: "🤍 En Yoğun Hissettiğimiz Duygular",
    key: "letter1",
  },
  {
    title: "🌸 Sana Söylemek İstediklerim",
    key: "letter2",
  },
  {
    title: "❤️ Seni Neden Seviyorum",
    key: "letter3",
  },
  {
    title: "✨ Birlikte Kurduğumuz Hayaller",
    key: "letter4",
  },
  {
    title: "💍 Geleceğimiz",
    key: "letter5",
  },
  {
    title: "💌 Sonsuza Kadar Sana",
    key: "letter6",
  },
];

export default function LettersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081229] via-[#0d1b3d] to-[#020611] text-white px-5 sm:px-8 lg:px-10 py-8">

      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4">
        💌 Sana Mektuplarım
      </h1>

      <p className="text-center text-gray-300 italic mb-10 text-base sm:text-lg">
        Kalbimden geçen her kelime,
        <br className="sm:hidden" />
        sana yazılmış küçük bir mektuptur...
      </p>

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

        {letters.map((letter) => (

          <div
            key={letter.key}
            className="
              glass
              hover-card
              rounded-3xl
              p-5
              sm:p-8
              shadow-xl
            "
          >

            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              {letter.title}
            </h2>

            <p className="text-gray-300 italic mb-6 text-sm sm:text-base">
              Kalbinden geçenleri özgürce yaz...
            </p>

            <LetterBox storageKey={letter.key} />

          </div>

        ))}

      </div>

    </main>
  );
}
