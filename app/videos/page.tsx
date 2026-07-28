"use client";

import NoteBox from "@/components/NoteBox";

const videos = [
  {
    src: "/videos/video1.MP4",
    title: "Hayatımın Başrolü ile Sunuculuk 🤍",
  },
  {
    src: "/videos/video2.MP4",
    title: "Mutlu Anımız 🤍",
  },
  {
    src: "/videos/video3.mp4",
    title: "En Güzel Gülüşün Hepsi Çok Güzel 😊",
  },
  {
    src: "/videos/video4.mp4",
    title: "Birlikte Aşkımızı Haykırdığımız Konser 🌸",
  },
  {
    src: "/videos/video5.mp4",
    title: "Canım Ömrüşüm 💕",
  },
  {
    src: "/videos/video6.mp4",
    title: "Sonsuza Kadar Sen 🤍",
  },
  {
    src: "/videos/video7.mp4",
    title: "Öpmelere doyamadığım ❤️",
  },
  {
    src: "/videos/video8.mp4",
    title: "Deli diyorlar ban Desinler Değişemem desinler değişemem 🤍",
  },
  {
    src: "/videos/video9.mp4",
    title: "Bir zamanlar M4 ve iett bizi hep böyle görürdü 🌹",
  },
  {
    src: "/videos/video10.mp4",
    title: "Sesine kurban olduğum 💍",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081229] via-[#0d1b3d] to-[#020611] text-white px-4 py-8 sm:px-8 sm:py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          🎥 Videolarımız
        </h1>

        <p className="text-center text-gray-300 italic mt-4 mb-10">
          Hareket eden anılar bazen en güzel hatıralardır...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {videos.map((video) => (

            <div
              key={video.src}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl"
            >

              <video
                controls
                preload="metadata"
                playsInline
                className="w-full rounded-2xl shadow-xl"
              >
                <source src={video.src} type="video/mp4" />
                Tarayıcınız videoyu desteklemiyor.
              </video>

              <h2 className="text-2xl font-bold mt-5">
                {video.title}
              </h2>

              <p className="text-gray-300 mt-3 mb-6">
                Bu anının hissettirdiklerini buraya yazabilirsin. 🤍
              </p>

              <NoteBox storageKey={video.src} />

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
