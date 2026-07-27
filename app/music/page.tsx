"use client";

import Image from "next/image";
import { useState }from "react";

const songs = [
  {
    title: "Meleklerin Sözü Var",
    artist: "Yalın",
    cover: "/covers/meleklerinsozuvar.jpg",
    audio: "/music/meleklerinsozuvar.mp3",
    note: "Bu şarkıyı her dinlediğimde aklıma sen geliyorsun. 🤍",
    favorite: true,
  },
  {
    title: "Varsan Varım",
    artist: "Aşka Türlü Şeyler",
    cover: "/covers/varsanvarim.jpg",
    audio: "/music/varsanvarim.mp3",
    note: "Sen varsan ben de varım. ❤️",
    favorite: false,
  },
  {
    title: "Sana Doğru",
    artist: "Ajda Pekkan",
    cover: "/covers/sanadogru.jpg",
    audio: "/music/sanadogru.mp3",
    note: "Kalbim her zaman sana doğru atıyor.",
    favorite: false,
  },
];

export default function MusicPage() {
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081229] via-[#0d1b3d] to-[#020611] text-white px-5 py-8 md:px-10">

      {currentSong && (
        <audio
          src={currentSong}
          controls
          autoPlay
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl rounded-xl"
        />
      )}

      <h1 className="text-3xl md:text-5xl font-bold text-center">
        🎵 Şarkılarımız
      </h1>

      <p className="text-center italic text-pink-300 mt-4 mb-10 md:mb-14 text-base md:text-xl">
        Bazı duygular anlatılmaz...
        <br />
        Sadece birlikte dinlenir. 🤍
      </p>

      <div className="max-w-6xl mx-auto space-y-8">

        {songs.map((song) => (
          <div
            key={song.title}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-xl p-5 md:p-8 hover:scale-[1.01] transition"
          >

            <div className="flex flex-col lg:flex-row gap-8 items-center">

              <Image
                src={song.cover}
                alt={song.title}
                width={220}
                height={220}
                className="rounded-3xl object-cover w-48 h-48 md:w-[220px] md:h-[220px]"
              />

              <div className="flex-1 w-full">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>

                    <h2 className="text-2xl md:text-4xl font-bold">
                      🎵 {song.title}
                    </h2>

                    <p className="text-pink-300 text-lg md:text-xl mt-2">
                      {song.artist}
                    </p>

                  </div>

                  {song.favorite && (
                    <div className="bg-pink-500 rounded-full px-4 py-2 text-sm md:text-base font-semibold self-start">
                      ❤️ Favorimiz
                    </div>
                  )}

                </div>

                <div className="mt-6 bg-white/10 rounded-2xl p-5">

                  <p className="italic text-gray-200 leading-8">
                    {song.note}
                  </p>

                </div>

                <button
                  onClick={() => setCurrentSong(song.audio)}
                  className="mt-6 w-full md:w-auto bg-pink-500 hover:bg-pink-600 transition px-7 py-4 rounded-xl font-bold shadow-xl"
                >
                  ▶ Şarkıyı Çal
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="text-center mt-20 pb-24">

        <h2 className="text-4xl">
          🎶
        </h2>

        <p className="italic text-gray-300 mt-5 text-lg md:text-xl leading-8">
          Her şarkıda biraz biz var...
          <br />
          Çünkü bazı duygular kelimelerle değil,
          melodilerle anlatılır. 🤍
        </p>

      </div>

    </main>
  );
}
