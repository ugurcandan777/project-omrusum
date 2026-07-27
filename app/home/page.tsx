"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Stars from "@/components/Stars";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const logged = localStorage.getItem("logged");

    if (logged !== "true") {
      router.push("/login");
    }
  }, [router]);

  function logout() {
    localStorage.removeItem("logged");
    router.push("/");
  }

  const cards = [
    {
      emoji: "📸",
      title: "Anılarımız",
      desc: "Birlikte yaşadığımız en güzel anlar.",
      link: "/memories",
    },
    {
      emoji: "🎥",
      title: "Videolarımız",
      desc: "Birlikte çektiğimiz videolar.",
      link: "/videos",
    },
    {
      emoji: "💌",
      title: "Sana Mektuplarım",
      desc: "Kalbimden sana yazdığım satırlar.",
      link: "/letters",
    },
    {
      emoji: "📖",
      title: "Ortak Günlüğümüz",
      desc: "Bugün ne hissediyorsan yaz.",
      link: "/diary",
    },
    {
      emoji: "🎵",
      title: "Şarkılarımız",
      desc: "Bizi anlatan melodiler.",
      link: "/music",
    },
    {
      emoji: "⏳",
      title: "Birlikte Geçen Süre",
      desc: "Her saniyesi çok değerli.",
      link: "/countdown",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050B1D] via-[#0A1E47] to-[#020611] text-white">

      <Stars />

      {/* Arka plan ışıkları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square bg-blue-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[60vw] max-w-[500px] aspect-square bg-pink-500/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-16">

        {/* Üst Alan */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Damla <span className="heartbeat text-pink-300">🤍</span> Uğur
            </h1>

            <p className="mt-4 text-lg sm:text-xl italic text-gray-300">
              "Bazı ruhlar evvelden aşinadır birbirine..."
            </p>

          </div>

          <button
            onClick={logout}
            className="
              px-6
              py-3
              rounded-2xl
              bg-red-500
              hover:bg-red-600
              transition
              shadow-xl
              font-semibold
            "
          >
            🚪 Çıkış Yap
          </button>

        </div>

        {/* Hoş Geldin */}
        <div className="glass rounded-3xl mt-10 p-6 sm:p-8">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Hoş Geldin Ömrüşüm 🤍
          </h2>

          <p className="text-gray-300 leading-8 text-sm sm:text-base md:text-lg">
            Bu uygulama sadece bir internet sitesi değil...
            <br />
            Birlikte yaşadığımız bütün güzel anıları,
            mektupları, videoları ve şarkıları
            sonsuza kadar saklayacağımız küçük dünyamız.
          </p>

        </div>

        {/* Günün Mesajı */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-300/20 p-6 shadow-xl">

          <h2 className="text-2xl font-bold mb-3">
            ❤️ Günün Mesajı
          </h2>

          <p className="italic text-gray-200 leading-8">
            "Bugün de seni ilk günkü gibi sevmeye devam ediyorum."
          </p>

        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-12">

          {cards.map((card) => (

            <Link
              key={card.title}
              href={card.link}
              className="
                glass
                hover-card
                floating
                rounded-3xl
                p-8
                shadow-xl
                transition
              "
            >

              <div className="text-5xl mb-5">
                {card.emoji}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {card.title}
              </h2>

              <p className="text-gray-300 leading-7">
                {card.desc}
              </p>

            </Link>

          ))}

        </div>

        {/* Alt Yazı */}
        <div className="mt-20 text-center">

          <div className="text-4xl heartbeat">
            🤍
          </div>

          <p className="mt-5 text-lg sm:text-xl italic text-gray-300 leading-9">
            "Her güzel hikâye küçük bir tesadüfle başlar..."
            <br />
            "Bizim hikâyemiz ise kaderle başladı."
          </p>

          <div className="mt-10 text-xs sm:text-sm italic text-gray-500">
            Made with ❤️ by Uğur for Damla
          </div>

        </div>

      </div>

    </main>
  );
}
