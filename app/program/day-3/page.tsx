"use client";

export default function DayThreePage() {
  return (
    <main className="min-h-screen bg-[#020611] text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Başlık */}

        <div className="text-center mb-14">

          <div className="text-6xl mb-6">
            🌿
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            3. Gün
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Aerobik
            <br />
            + Mobilite
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            Bugünkü çalışmamızda yürüyüş,
            <br />
            mobilite ve nefes çalışmalarına odaklanıyoruz.
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

            <p>• Dinamik esneme hareketleri</p>

          </div>

        </section>


        {/* Aerobik Bölüm */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              ❤️ Aerobik Bölüm
            </h2>

            <span className="text-pink-300 font-semibold">
              30 dakika
            </span>

          </div>

          <p className="mt-6 text-gray-300 leading-7">
            Aralıklı yürüyüş yöntemiyle çalış.
            Kontrollü bir tempo ile başlayıp hızlı tempo
            bölümünde yoğunluğu artır.
          </p>


          {/* Interval */}

          <div className="mt-7 grid md:grid-cols-2 gap-5">

            <div className="bg-white/5 rounded-2xl p-6">

              <p className="text-2xl font-bold">
                🚶 2 dakika
              </p>

              <p className="mt-3 text-gray-400">
                Normal tempo yürüyüş
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-6">

              <p className="text-2xl font-bold">
                🏃 1 dakika
              </p>

              <p className="mt-3 text-gray-400">
                Hızlı tempo yürüyüş
              </p>

            </div>

          </div>


          {/* Tekrar */}

          <div className="mt-6 rounded-2xl bg-pink-400/5 border border-pink-400/20 p-6 text-center">

            <p className="text-lg font-bold text-pink-300">
              🔁 10 tekrar
            </p>

            <p className="mt-3 text-gray-400">
              2 dakika normal tempo + 1 dakika hızlı tempo
            </p>

          </div>

        </section>


        {/* Mobilite */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🧘 Mobilite ve Esneklik
            </h2>

            <span className="text-pink-300 font-semibold">
              15 dakika
            </span>

          </div>

          <p className="mt-6 text-gray-300">
            Hareketleri kontrollü şekilde ve ağrı sınırına
            girmeden uygula.
          </p>


          <div className="mt-7 grid md:grid-cols-2 gap-4">

            <div className="bg-white/5 rounded-2xl p-5">
              Kalça
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              Hamstring
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              Quadriceps
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              Göğüs
            </div>

            <div className="bg-white/5 rounded-2xl p-5 md:col-span-2">
              Sırt
            </div>

          </div>

        </section>


        {/* Nefes */}

        <section className="glass rounded-[32px] p-8 mb-7 border border-white/10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              🌬️ Nefes Egzersizi
            </h2>

            <span className="text-pink-300 font-semibold">
              5 dakika
            </span>

          </div>


          <div className="mt-7 rounded-2xl bg-white/5 p-7 text-center">

            <p className="text-3xl font-bold">
              4 sn
            </p>

            <p className="text-gray-400 mt-2">
              Nefes al
            </p>

            <div className="text-3xl my-4">
              ↓
            </div>

            <p className="text-3xl font-bold">
              6 sn
            </p>

            <p className="text-gray-400 mt-2">
              Nefes ver
            </p>

          </div>


          <p className="mt-6 text-gray-300 text-center leading-7">
            Diyafram nefesine odaklan.
            <br />
            4 saniye nefes al, 6 saniye nefes ver.
          </p>

        </section>


        {/* PMS Modifikasyonu */}

        <section
          className="
            rounded-[32px]
            border
            border-pink-400/30
            bg-pink-400/5
            p-8
            mb-10
          "
        >

          <div className="text-center">

            <div className="text-5xl mb-5">
              🌸
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
              PMS Döneminde Modifikasyon
            </h2>

            <p className="mt-3 text-gray-400">
              Adet başlangıcından yaklaşık 3–5 gün önce
            </p>

          </div>


          <div className="mt-8 space-y-4">

            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                📉 Yoğunluğu %20–30 azalt
              </p>

              <p className="mt-2 text-gray-400">
                Kendini daha yorgun hissettiğin günlerde
                antrenman temposunu düşür.
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                🚶 Daha fazla yürüyüş ve mobilite
              </p>

              <p className="mt-2 text-gray-400">
                Daha düşük yoğunluklu yürüyüş ve mobilite
                çalışmalarına ağırlık verebilirsin.
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                ⚠️ Karın ağrısı varsa intervali çıkar
              </p>

              <p className="mt-2 text-gray-400">
                Karın ağrısı veya belirgin rahatsızlık varsa
                hızlı tempo interval bölümünü uygulama.
              </p>

            </div>


            <div className="bg-white/5 rounded-2xl p-5">

              <p className="font-semibold">
                🧘 Germe ve nefes çalışmalarını artır
              </p>

              <p className="mt-2 text-gray-400">
                Bu dönemde rahatlatıcı mobilite, germe ve
                nefes çalışmalarına daha fazla zaman ayır.
              </p>

            </div>

          </div>


          {/* Aşkuşu Mesajı */}

          <div className="mt-7 border-t border-white/10 pt-6 text-center">

            <p className="text-pink-200 leading-8 text-base md:text-lg">
              Herhangi bir olağanüstü durumda, kendini iyi
              hissetmediğin bir anda veya kafana takılan bir
              şey olduğunda <strong>Aşkuşunuza sor. 🌸</strong>
            </p>

            <p className="mt-4 text-gray-300 italic leading-8">
              Ben senin için buradayım.
              <br />
              Acele etme, kendini dinle ve her şeyden önce
              kendine iyi davran. 🤍
            </p>

          </div>

        </section>


        {/* Alt Mesaj */}

        <div className="text-center">

          <div className="w-24 h-px bg-white/10 mx-auto" />

          <p className="mt-8 text-gray-400 italic leading-8">
            Bugün bedenine biraz alan aç...
            <br />
            Nefes al, hareket et ve kendini dinle. 🤍
          </p>

        </div>

      </div>

    </main>
  );
}
