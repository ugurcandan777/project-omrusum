"use client";

import { useState } from "react";
import NoteBox from "@/components/NoteBox";

const photos = [
  { src: "/images/foto1.JPG", title: "🎂 Damlişimizin İlk Doğum Günü 🤍" },
  { src: "/images/foto2.JPG", title: "❤️ Nişanlılık Cosplay" },
  { src: "/images/foto3.JPG", title: "🌊 Birlikte Deniz" },
  { src: "/images/foto4.JPG", title: "🏰 Kız Kulesi Önünde Aşka Geliş" },
  { src: "/images/foto5.JPG", title: "⛰️ Uludağ ve Aşk" },
  { src: "/images/foto6.JPG", title: "🌸 Canım Ömrüşüm" },

  { src: "/images/foto7.JPG", title: "❤️ Geleceğim ve Ben" },
  { src: "/images/foto8.JPG", title: "🚶‍♂️ Ufak Bir Bursa Turundan" },
  { src: "/images/foto9.JPG", title: "🥹 Gülüşüne Hasretlendiğim Gün" },
  { src: "/images/foto10.JPG", title: "💍 Serseri Düğüncülük" },
  { src: "/images/foto11.JPG", title: "🤍 Cankuşum" },
  { src: "/images/foto12.JPG", title: "✨ Aşktanemle Böyle Uyumlu Gezmek En Sevdiğim Şey" },
  { src: "/images/foto13.JPG", title: "😴 Aşktanem Baltanem... Şu Tatlı Uyuşuna Bakar Mısın?" },
  { src: "/images/foto14.JPG", title: "🌅 Gördüğüm En Güzel Manzara" },
  { src: "/images/foto15.JPG", title: "🚲 Adalar'da Bisikletle Gittiğimiz O Köşk" },
  { src: "/images/foto16.JPG", title: "💫 Bazı Ruhlar Evvelden Aşinadır Birbirine..." },
  { src: "/images/foto17.JPG", title: "💋 Seni Öperek Bu Anı Ölümsüzleştirmek Muazzamdı" },
  { src: "/images/foto18.JPG", title: "❤️ Sanki Sevilmeye Değer Ne Varsa Sende Toplanmış Gibi" },
  { src: "/images/foto19.JPG", title: "👑 Benim Prensesim" },
  { src: "/images/foto20.JPG", title: "❄️ Kar Beyazım ve Ben" },
  { src: "/images/foto21.JPG", title: "💐 Çiçek Sürprizi ve Hayatımın En Güzel Sürprizi" },
  { src: "/images/foto22.JPG", title: "🕌 Çamlıca Camii ve Aşktanem" },
  { src: "/images/foto23.JPG", title: "🌉 Galata'nın Tepesinde Yine Biz" },
  { src: "/images/foto24.JPG", title: "🎤 Sunuculuk Sana Çok Yakışıyor" },
  { src: "/images/foto25.JPG", title: "🐺 Altaylardan Tuna'ya" },
  { src: "/images/foto26.JPG", title: "🥹 Şu Güzelliğe Bak... Kurban Olurum" },
  { src: "/images/foto27.JPG", title: "👰 Gelecekteki Gelinim ❤️" },
  { src: "/images/foto28.JPG", title: "🌃 Erbap'ta Boğaz Manzarası ve Işıklar Yanıyor" },
  { src: "/images/foto29.JPG", title: "🤝 Benim Yoldaşım" },
  { src: "/images/foto30.JPG", title: "💊 Eczacılar Günün Kutlu Olsun Eczacım" },
  { src: "/images/foto31.JPG", title: "🏝️ Balayı Gibi Hissettiren O Gün" },
  { src: "/images/foto32.JPG", title: "🎈 Damliş ve Kalpli Balon" },
  { src: "/images/foto33.JPG", title: "🏔️ Zirve ve Zirve Eden Kişi: Sen" },
  { src: "/images/foto34.JPG", title: "🍽️ Seyfo Dayının Mekânında En Yakınımla" },
  { src: "/images/foto35.JPG", title: "🎂 Damlişimin Elleriyle Hazırladığı Pasta (8 Şubat)" },
  { src: "/images/foto36.JPG", title: "🕌 Ulucami" },
  

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
            className="glass rounded-3xl overflow-hidden hover-card glow"
          >

            <div
              onClick={() => setSelectedPhoto(index)}
              className="cursor-pointer"
            >

              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 md:h-72 object-cover"
                loading="lazy"
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

            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].title}
              className="w-full rounded-3xl object-contain max-h-[75vh]"
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
