"use client";

export default function DayOnePage() {
  return (
    <main className="min-h-screen bg-[#020611] text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Başlık */}

        <div className="text-center mb-14">

          <div className="text-6xl mb-6">
            ❤️
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            1. Gün
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Aerobik Dayanıklılık
            <br />
            + Yürüyüş
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Bugünkü amacımız dayanıklılığını geliştirmek
            <br />
            ve kendini iyi hissettirecek bir tempo yakalamak.
          </p>

        </div>


        {/* Isınma */}

        <section
          className="
            glass
            rounded-[32px]
            p-8
            mb-7
            border
            border-white/10
          "
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🔥 Isınma
            </h2>

            <span className="text-pink-300 font-semibold">
              10 dakika
            </span>

          </div>

          <div className="mt-7 space-y-4 text-gray-300">

            <p>• 5 dakika rahat tempo yürüyüş</p>

            <p>• Dinamik germe / mobilizasyon</p>

            <div className="pl-4 space-y-2 text-gray-400">
              <p>• Omuz çevirme</p>
              <p>• Kalça rotasyonu</p>
              <p>• Diz çekme</p>
              <p>• Topuk-kalça</p>
            </div>

          </div>

        </section>


        {/* Ana Bölüm */}

        <section
          className="
            glass
            rounded-[32px]
            p-8
            mb-7
            border
            border-white/10
          "
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              ❤️ Ana Bölüm
            </h2>

            <span className="text-pink-300 font-semibold">
              30 dakika
            </span>

          </div>


          <div className="mt-7 space-y-5">

            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                5 dakika
              </p>

              <p className="mt-2 text-gray-300">
                Açık alanda rahat tempo yürüyüş
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                20 dakika
              </p>

              <p className="mt-2 text-gray-300">
                Orta tempo yürüyüş
              </p>

              <p className="mt-2 text-gray-400">
                Yaklaşık %50–65 yoğunluk
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                5 dakika
              </p>

              <p className="mt-2 text-gray-300">
                Yüksek tempo, kontrollü yürüyüş
              </p>

            </div>

          </div>


          {/* Konuşma Testi */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-pink-400/20
              bg-pink-400/5
              p-6
            "
          >

            <p className="font-bold text-pink-300">
              🎤 Konuşma Testi
            </p>

            <p className="mt-3 text-gray-300 leading-7">
              Egzersiz sırasında konuşabilecek ancak
              şarkı söyleyemeyecek düzeyde bir tempo hedefle.
            </p>

          </div>

        </section>


        {/* Soğuma */}

        <section
          className="
            glass
            rounded-[32px]
            p-8
            mb-7
            border
            border-white/10
          "
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🧘 Soğuma
            </h2>

            <span className="text-pink-300 font-semibold">
              10 dakika
            </span>

          </div>

          <div className="mt-7 space-y-4 text-gray-300">

            <p>• Yavaş tempo yürüyüş</p>

            <p>• Alt ekstremite germe hareketleri</p>

          </div>

        </section>


        {/* Core */}

        <section
          className="
            glass
            rounded-[32px]
            p-8
            mb-10
            border
            border-white/10
          "
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              💪 Core
            </h2>

            <span className="text-pink-300 font-semibold">
              10 dakika
            </span>

          </div>

          <div className="mt-7 space-y-4 text-gray-300">

            <p>• Bird Dog (Kuş-Köpek)</p>

            <p>• Dead Bug (Ölü Böcek)</p>

            <p>• Glute Bridge (Kalça Köprüsü)</p>

          </div>

        </section>


        {/* Alt mesaj */}

        <div className="text-center">

          <div className="w-24 h-px bg-white/10 mx-auto" />

          <p className="mt-8 text-gray-400 italic leading-8">
            Bugün kendin için attığın
            <br />
            her adım çok değerli. 🤍
          </p>

        </div>

      </div>

    </main>
  );
}
