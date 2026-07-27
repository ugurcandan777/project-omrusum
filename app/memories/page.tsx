"use client";

import { useState } from "react";
import Image from "next/image";
import NoteBox from "@/components/NoteBox";

const photos = [
  {
    src: "/images/foto1.JPG",
    title: "Damlişimizin ilk doğum günü :) 🤍",
  },
  {
    src: "/images/foto2.JPG",
    title: "Nişanlılık Cosplay ❤️",
  },
  {
    src: "/images/foto3.JPG",
    title: "Birlikte Deniz 🌊",
  },
  {
    src: "/images/foto4.JPG",
    title: "Kız Kulesinin Önünde Aşka Geliş 😊",
  },
  {
    src: "/images/foto5.JPG",
    title: "Uludağ ve Aşk ❤️",
  },
  {
    src: "/images/foto6.JPG",
    title: "Canım Ömrüşüm 🌸",
  },
];

export default function MemoriesPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081229] via-[#0d1b3d] to-[#020611] text-white px-5 py-10 md:px-10">

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        📸 Anılarımız
      </h1>

      <p className="text-center text-gray-300 mb-12 italic text-base md:text-lg">
        Birlikte yaşadığımız her güzel an burada yaşayacak...
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {photos.map((photo, index) => (

          <div
            key={photo.src}
            className="
              glass
              rounded-3xl
              overflow-hidden
              hover-card
              glow
            "
          >

            <div
              onClick={() => setSelectedPhoto(index)}
              className="cursor-pointer"
            >

              <Image
                src={photo.src}
                alt={photo.title}
                width={500}
                height={400}
                className="
                  w-full
                  h-64
                  md:h-72
                  object-cover
                "
              />

            </div>

            <div className="p-6 text-center">

              <h2 className="text-xl md:text-2xl font-bold">
                {photo.title}
              </h2>

              <p className="text-gray-400 mt-3">
                Fotoğrafı büyütmek için dokun 🤍
              </p>

            </div>

          </div>

        ))}

      </div>

      {selectedPhoto !== null && (

        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">

          <div className="max-w-6xl mx-auto p-5 md:p-10">

            <button
              onClick={() => setSelectedPhoto(null)}
              className="text-4xl hover:text-pink-400 transition mb-6"
            >
              ✕
            </button>

            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].title}
              width={1200}
              height={900}
              className="
                w-full
                rounded-3xl
                object-contain
                max-h-[75vh]
              "
            />

            <h2 className="text-2xl md:text-4xl font-bold text-center mt-8">
              {photos[selectedPhoto].title}
            </h2>

            <div className="mt-8">
              <NoteBox storageKey={photos[selectedPhoto].src} />
            </div>

          </div>

        </div>

      )}

    </main>
  );
}
