"use client";

import Link from "next/link";
import Stars from "@/components/Stars";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#0b1f44] to-[#020611] flex items-center justify-center px-5 py-10">

      <Stars />

      {/* Arka plan ışıkları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square bg-blue-500/10 blur-[180px]" />
      <div className="absolute -bottom-24 right-0 w-[60vw] max-w-[500px] aspect-square bg-pink-500/10 blur-[150px]" />

      <div className="relative z-10 w-full flex justify-center">

        <div
          className="
            w-full
            max-w-3xl
            rounded-[36px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-2xl
            shadow-2xl
            px-6
            sm:px-10
            md:px-14
            py-10
            md:py-16
            text-center
          "
        >

          <h1
            className="
              fade-up
              opacity-0
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              text-white
              leading-tight
              drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]
            "
          >
            Damla <span className="text-pink-300 heartbeat">♡</span> Uğur
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          </div>

          <p
            className="
              fade-up
              fade-delay-1
              opacity-0
              mt-8
              text-lg
              sm:text-xl
              md:text-2xl
              italic
              text-gray-300
            "
          >
            "Bazı ruhlar evvelden aşinadır birbirine..."
          </p>

          <p
            className="
              fade-up
              fade-delay-2
              opacity-0
              mt-8
              text-sm
              sm:text-base
              md:text-lg
              leading-8
              text-gray-400
            "
          >
            Bu uygulama yalnızca bir internet sitesi değil.
            <br />
            Birlikte yaşadığımız anıları,
            mektupları,
            şarkıları,
            videoları ve
            güzel anları saklayacağımız
            küçük dünyamız...
          </p>

          <Link
            href="/login"
            className="
              fade-up
              fade-delay-3
              opacity-0
              breathe
              inline-flex
              items-center
              justify-center
              mt-12
              w-full
              sm:w-auto
              px-12
              py-4
              rounded-full
              bg-gradient-to-r
              from-pink-500
              via-pink-400
              to-purple-500
              text-white
              text-lg
              md:text-xl
              font-bold
              shadow-[0_0_35px_rgba(236,72,153,0.45)]
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
          >
            ❤️ Giriş Yap
          </Link>

          <div className="mt-12 flex justify-center">
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <p
            className="
              fade-up
              fade-delay-3
              opacity-0
              mt-8
              text-xs
              sm:text-sm
              italic
              text-gray-500
            "
          >
            Made with ❤️ by Uğur for Damla
          </p>

        </div>

      </div>

    </main>
  );
}
