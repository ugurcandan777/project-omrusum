"use client";

import Image from "next/image";
import { useState }from "react";

const songs = [
{
  title: "Neyim Yoksa Yerine Sensin",
  artist: "Damla 🤍",
  cover: "/images/damla-album.JPG",
  audio: "/music/damla.mp3",
  note:
    "Bana yazdığın bu şarkı hayatım boyunca sahip olduğum en değerli hediyelerden biri... Seni her dinlediğimde sana yeniden âşık oluyorum. 🤍",
  favorite: true,
},
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
            className="
bg-white/10
backdrop-blur-3xl
rounded-[36px]
border
border-pink-300/20
shadow-[0_0_60px_rgba(236,72,153,.12)]
p-6
md:p-10
hover:scale-[1.02]
transition-all
duration-500
"
          >

            <div className="flex flex-col lg:flex-row gap-8 items-center">

              <Image
  src={song.cover}
  alt={song.title}
  width={320}
  height={420}
  className="
    rounded-[30px]
    object-cover
    w-[260px]
    h-[360px]
    md:w-[320px]
    md:h-[420px]
    shadow-[0_0_40px_rgba(255,255,255,.18)]
    transition-all
    duration-700
    hover:scale-105
  "
/>

              <div className="flex-1 w-full">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>

                    <h2 className="text-3xl md:text-5xl font-bold">
                      🎵 {song.title}
                    </h2>

                    <p className="text-pink-300 text-lg md:text-xl mt-2">
                      {song.artist}
                    </p>

                  </div>

                  {song.favorite && (
                    <div className="bg-pink-500 rounded-full px-4 py-2 text-sm md:text-base font-semibold self-start">
                     🤍 Damla'nın Bana Hediyesi
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
  className="
    mt-6
    w-full
    md:w-auto
    bg-gradient-to-r
    from-pink-500
    to-purple-500
    hover:scale-105
    transition-all
    duration-300
    px-8
    py-4
    rounded-2xl
    font-bold
    shadow-[0_0_30px_rgba(236,72,153,.35)]
  "
>
  ▶ Dinlemeye Başla
</button>
</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-24 pb-24">
        <div className="text-6xl animate-pulse">
          🤍
        </div>

        <p className="italic text-gray-300 mt-6 text-lg md:text-2xl leading-10">
          Bu uygulamada onlarca anımız olabilir...
          <br /><br />
          Ama bazı şarkılar vardır ki...
          <br /><br />
          İnsan her dinlediğinde
          <br />
          ilk günkü gibi sever...
        </p>
      </div>

    </main>
  );
}