"use client";

import { useEffect, useState } from "react";

export default function KalbimiYakalaPage() {
  const GAME_TIME = 30;
  const POINTS = 10;

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [heartPosition, setHeartPosition] = useState({
    top: 50,
    left: 50,
  });

  const [message, setMessage] = useState("");

  // En yüksek skoru kaydet
  useEffect(() => {
    const savedScore = localStorage.getItem("kalbimi-yakala-highscore");

    if (savedScore) {
      setHighScore(Number(savedScore));
    }
  }, []);

  // Oyun süresi
  useEffect(() => {
    if (!started) return;

    if (timeLeft <= 0) {
      finishGame();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  function startGame() {
    setScore(0);
    setTimeLeft(GAME_TIME);
    setStarted(true);
    setMessage("");

    moveHeart();
  }

  function finishGame() {
    setStarted(false);

    setScore((currentScore) => {
      if (currentScore > highScore) {
        setHighScore(currentScore);
        localStorage.setItem(
          "kalbimi-yakala-highscore",
          String(currentScore)
        );
      }

      return currentScore;
    });

    setMessage("🤍 Oyun bitti! Aşkuşunun kalbini yakaladın.");
  }

  function moveHeart() {
    const top = Math.floor(Math.random() * 70) + 15;
    const left = Math.floor(Math.random() * 70) + 15;

    setHeartPosition({
      top,
      left,
    });
  }

  function catchHeart() {
    if (!started) return;

    const newScore = score + POINTS;

    setScore(newScore);

    // Yeni rekoru anında kaydet
    if (newScore > highScore) {
      setHighScore(newScore);

      localStorage.setItem(
        "kalbimi-yakala-highscore",
        String(newScore)
      );
    }

    setMessage("🤍 Aşkuşunun kalbini yakaladın! +10");

    moveHeart();
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#020611]
        text-white
        px-6
        py-12
        overflow-hidden
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* Başlık */}

        <div className="text-center">

          <div className="text-6xl mb-5">
            🤍
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            Mini Oyunumuz
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Kalbimi Yakala
          </h1>

          <p className="mt-5 text-gray-300 leading-8">
            Aşkuşunun kalplerini yakala...
            <br />
            Bakalım 30 saniyede kaç tane yakalayabileceksin? 🤍
          </p>

        </div>


        {/* Skor Alanı */}

        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto mt-10">

          <div
            className="
              glass
              rounded-3xl
              p-6
              text-center
              border
              border-white/10
            "
          >
            <p className="text-sm text-gray-400">
              Süre
            </p>

            <p className="text-4xl font-bold mt-2">
              ⏱️ {timeLeft}
            </p>
          </div>


          <div
            className="
              glass
              rounded-3xl
              p-6
              text-center
              border
              border-white/10
            "
          >
            <p className="text-sm text-gray-400">
              Skor
            </p>

            <p className="text-4xl font-bold mt-2">
              🤍 {score}
            </p>
          </div>

        </div>


        {/* Oyun Alanı */}

        <div
          className="
            relative
            mt-8
            h-[500px]
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            overflow-hidden
            shadow-2xl
          "
        >

          {/* Başlangıç ekranı */}

          {!started && timeLeft === GAME_TIME && (
            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-6
              "
            >

              <div className="text-7xl mb-6">
                🤍
              </div>

              <h2 className="text-3xl font-bold">
                Aşkuşunun kalbini yakalamaya hazır mısın?
              </h2>

              <p className="text-gray-400 mt-4 max-w-md">
                30 saniyen var.
                <br />
                Ekranda beliren beyaz kalplere mümkün olduğunca hızlı tıkla.
              </p>

              <button
                onClick={startGame}
                className="
                  mt-8
                  rounded-full
                  bg-white
                  text-[#081229]
                  px-10
                  py-4
                  font-bold
                  text-lg
                  hover:scale-105
                  transition-all
                  shadow-xl
                "
              >
                ❤️ Oyunu Başlat
              </button>

            </div>
          )}


          {/* Oyun bittikten sonra */}

          {!started && timeLeft === 0 && (
            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-6
              "
            >

              <div className="text-7xl mb-6">
                🤍
              </div>

              <h2 className="text-4xl font-bold">
                Oyun Bitti!
              </h2>

              <p className="text-gray-300 mt-5">
                Aşkuşunun kalbini
              </p>

              <p className="text-6xl font-bold mt-3">
                {score}
              </p>

              <p className="text-gray-400 mt-2">
                puanla yakaladın 🤍
              </p>

              {score >= highScore && score > 0 && (
                <p className="mt-5 text-pink-300 font-bold">
                  🎉 Yeni rekor!
                </p>
              )}

              <button
                onClick={startGame}
                className="
                  mt-8
                  rounded-full
                  bg-white
                  text-[#081229]
                  px-10
                  py-4
                  font-bold
                  text-lg
                  hover:scale-105
                  transition-all
                "
              >
                🔄 Tekrar Oyna
              </button>

            </div>
          )}


          {/* Hareketli kalp */}

          {started && (
            <button
              onClick={catchHeart}
              className="
                absolute
                -translate-x-1/2
                -translate-y-1/2
                text-6xl
                md:text-7xl
                hover:scale-125
                active:scale-90
                transition-transform
                duration-150
                drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]
              "
              style={{
                top: `${heartPosition.top}%`,
                left: `${heartPosition.left}%`,
              }}
              aria-label="Kalbi yakala"
            >
              🤍
            </button>
          )}

        </div>


        {/* Mesaj */}

        <div className="text-center min-h-[80px] mt-8">

          {message && (
            <p className="text-pink-200 text-lg font-semibold">
              {message}
            </p>
          )}

        </div>


        {/* Rekor */}

        <div
          className="
            glass
            rounded-3xl
            p-6
            text-center
            border
            border-white/10
            mt-4
            max-w-md
            mx-auto
          "
        >

          <p className="text-gray-400">
            🏆 En Yüksek Skor
          </p>

          <p className="text-3xl font-bold mt-2">
            {highScore}
          </p>

        </div>


        {/* Alt mesaj */}

        <div className="text-center mt-12">

          <div className="w-24 h-px bg-white/10 mx-auto" />

          <p className="mt-7 text-gray-400 italic leading-8">
            Kalpleri yakalamak kolay...
            <br />
            Ama benim kalbimi zaten sen çoktan yakaladın. 🤍
          </p>

        </div>

      </div>
    </main>
  );
}
