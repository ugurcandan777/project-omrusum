"use client";

export default function DayTwoPage() {
  return (
    <main className="min-h-screen bg-[#020611] text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Başlık */}

        <div className="text-center mb-14">

          <div className="text-6xl mb-6">
            💪
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            2. Gün
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Tüm Vücut
            <br />
            Kuvvet Antrenmanı
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            Tüm vücudu çalıştıran,
            <br />
            kontrollü ve dengeli bir kuvvet antrenmanı.
          </p>

        </div>


        {/* Isınma */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🔥 Isınma
            </h2>

            <span className="text-pink-300 font-semibold">
              10 dakika
            </span>

          </div>

          <div className="mt-7 space-y-4 text-gray-300">

            <p>• Hafif tempo yürüyüş</p>

            <p>• Mobilizasyon hareketleri</p>

          </div>

        </section>


        {/* Ana Bölüm */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              💪 Ana Bölüm — Devre Antrenmanı
            </h2>

            <span className="text-pink-300 font-semibold">
              3 tur
            </span>

          </div>


          <p className="mt-5 text-gray-300 leading-7">
            Aşağıdaki hareketleri sırayla tamamla.
            Her turun sonunda 2 dakika dinlen.
          </p>


          {/* 1. Tur */}

          <div className="mt-8">

            <div className="flex items-center gap-3 mb-4">

              <span className="rounded-full bg-pink-400/10 border border-pink-400/20 px-4 py-2 text-sm font-semibold text-pink-300">
                1. Tur
              </span>

            </div>

            <div className="space-y-3">

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="font-bold">1. Squat</p>
                <p className="text-gray-400 mt-1">
                  Kontrollü ve rahat hareket açıklığında.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="font-bold">2. Şınav</p>
                <p className="text-gray-400 mt-1">
                  İhtiyaca göre dizler destek alınarak uygulanabilir.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="font-bold">3. Step-Up</p>
                <p className="text-gray-400 mt-1">
                  Kontrollü şekilde yüksel ve başlangıç pozisyonuna dön.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="font-bold">4. Glute Bridge</p>
                <p className="text-gray-400 mt-1">
                  Kalçayı kontrollü şekilde yukarı kaldır ve indir.
                </p>
              </div>

            </div>

          </div>


          {/* Dinlenme */}

          <div className="mt-6 rounded-2xl bg-pink-400/5 border border-pink-400/20 p-5 text-center">

            <p className="font-bold text-pink-300">
              🧘 2 dakika dinlenme
            </p>

            <p className="mt-2 text-gray-400">
              Nefesini toparla ve bir sonraki tura hazırlan.
            </p>

          </div>


          {/* 2. ve 3. Tur */}

          <div className="mt-8 grid md:grid-cols-2 gap-5">

            <div className="bg-white/5 rounded-2xl p-6">

              <p className="font-bold text-xl">
                2. Tur
              </p>

              <p className="mt-3 text-gray-400 leading-7">
                Squat → Şınav → Step-Up → Glute Bridge
              </p>

              <p className="mt-3 text-pink-300 text-sm">
                Sonrasında 2 dakika dinlen.
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-6">

              <p className="font-bold text-xl">
                3. Tur
              </p>

              <p className="mt-3 text-gray-400 leading-7">
                Squat → Şınav → Step-Up → Glute Bridge
              </p>

              <p className="mt-3 text-pink-300 text-sm">
                Kontrollü şekilde tamamla.
              </p>

            </div>

          </div>

        </section>


        {/* Kardiyo Bitiriş */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🚶 Kardiyo Bitiriş
            </h2>

            <span className="text-pink-300 font-semibold">
              15 dakika
            </span>

          </div>

          <div className="mt-7 bg-white/5 rounded-2xl p-6">

            <p className="font-bold">
              Eğimli yerde tempolu yürüyüş
            </p>

            <p className="mt-3 text-gray-400 leading-7">
              Kontrollü ve sürdürülebilir bir tempoda yürüyüş
              yap.
            </p>

          </div>

        </section>


        {/* Soğuma */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🧘 Soğuma ve Germe
            </h2>

            <span className="text-pink-300 font-semibold">
              10 dakika
            </span>

          </div>

          <div className="mt-7 space-y-4 text-gray-300">

            <p>• Hafif tempo yürüyüş</p>

            <p>• Ağrı veya gerginlik hissedilen bölgelere yönelik hafif germe</p>

            <p>• Kontrollü nefes ve gevşeme</p>

          </div>

        </section>


        {/* Antrenman Notu */}

        <section className="rounded-[32px] border border-pink-400/20 bg-pink-400/5 p-8 mb-10">

          <h2 className="text-xl font-bold text-pink-300">
            🤍 Bugünün Notu
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            Hareketleri hızlı yapmak yerine kontrollü ve
            doğru teknikle uygulamaya odaklan.
            Ağrı oluşması durumunda hareketi durdur ve
            gerekli modifikasyonu yap.
          </p>

        </section>


        {/* Alt mesaj */}

        <div className="text-center">

          <div className="w-24 h-px bg-white/10 mx-auto" />

          <p className="mt-8 text-gray-400 italic leading-8">
            Güçlenmek sadece daha fazlasını yapmak değil...
            <br />
            Kendini dinlemeyi de öğrenmek. 🤍
          </p>

        </div>

      </div>

    </main>
  );
}
