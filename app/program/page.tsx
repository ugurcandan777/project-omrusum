"use client";

import Link from "next/link";

const workouts = [
  {
    id: 1,
    emoji: "❤️",
    title: "Aerobik Dayanıklılık + Yürüyüş",
    subtitle:
      "Yürüyüş, aerobik dayanıklılık ve core çalışması.",
    duration: "60 dakika",
  },
  {
    id: 2,
    emoji: "💪",
    title: "Tüm Vücut Kuvvet Antrenmanı",
    subtitle:
      "Tüm vücuda yönelik kuvvet ve kardiyo çalışması.",
    duration: "55 dakika",
  },
  {
    id: 3,
    emoji: "🌿",
    title: "Aerobik + Mobilite",
    subtitle:
      "Interval yürüyüş, mobilite ve nefes çalışmaları.",
    duration: "55–60 dakika",
  },
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#020611] text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        {/* Başlık */}

        <div className="text-center mb-16">

          <div className="text-6xl mb-6">
            🏋️
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            Senin Programın
          </h1>

          <p className="mt-5 text-gray-300 text-lg leading-8">
            Sana özel hazırladığım 3 günlük
            <br />
            antrenman programı.
          </p>

        </div>


        {/* Haftalık Program */}

        <section>

          <div className="text-center mb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
              Bu Haftanın Programı
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Birlikte güçleniyoruz 🤍
            </h2>

          </div>


          {/* Antrenman Kartları */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

            {workouts.map((workout) => (

              <div
                key={workout.id}
                className="
                  glass
                  rounded-[32px]
                  p-8
                  border
                  border-white/10
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:bg-white/10
                "
              >

                {/* Gün */}

                <div className="flex items-center justify-between mb-6">

                  <span
                    className="
                      rounded-full
                      bg-white/10
                      border
                      border-white/10
                      px-4
                      py-2
                      text-sm
                      font-semibold
                    "
                  >
                    {workout.id}. Gün
                  </span>

                  <span className="text-4xl">
                    {workout.emoji}
                  </span>

                </div>


                {/* Başlık */}

                <h3 className="text-2xl font-bold leading-tight">
                  {workout.title}
                </h3>


                {/* Açıklama */}

                <p className="mt-4 text-gray-300 leading-7">
                  {workout.subtitle}
                </p>


                {/* Süre */}

                <div className="mt-6 text-sm text-gray-400">
                  ⏱️ Yaklaşık {workout.duration}
                </div>


                {/* Buton */}

                <Link
                  href={`/program/day-${workout.id}`}
                  className="
                    mt-8
                    block
                    w-full
                    rounded-full
                    bg-white
                    text-[#081229]
                    py-3
                    text-center
                    font-bold
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >
                  Programı Gör →
                </Link>

              </div>

            ))}

          </div>

        </section>


        {/* Alt Mesaj */}

        <div className="text-center mt-16">

          <div className="w-24 h-px bg-white/10 mx-auto" />

          <p className="mt-8 text-gray-400 italic leading-8">
            Acele etme...
            <br />
            Önemli olan her gün biraz daha iyi hissetmen. 🤍
          </p>

        </div>

      </div>

    </main>
  );
}
