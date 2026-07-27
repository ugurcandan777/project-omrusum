"use client";

import NoteBox from "@/components/NoteBox";

export default function DiaryPage() {
  const today = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const quotes = [
    "🤍 Birlikte yazılan her satır, gelecekte gülümseyerek okuyacağımız bir anıya dönüşür.",
    "🌙 Bugün de aynı gökyüzünün altında seni sevdim.",
    "❤️ Küçük anlar, en büyük mutluluklara dönüşür.",
    "✨ Bu günlük, birlikte yaşadığımız güzel günlerin sessiz tanığı olacak.",
    "💖 Bir gün geriye dönüp okuduğumuzda bugünleri yeniden yaşayacağız.",
  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081229] via-[#0d1b3d] to-[#020611] px-4 py-8 sm:px-8 sm:py-10">

      <div className="w-full max-w-6xl mx-auto">

        <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">
          📖 Ortak Günlüğümüz
        </h1>

        <p className="text-center text-pink-300 text-lg sm:text-xl mt-3">
          {today}
        </p>

        <p className="text-center italic text-gray-300 mt-5 mb-10 text-sm sm:text-lg leading-8">
          {randomQuote}
        </p>

        <div className="bg-[#f5ecd7] rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Sol Sayfa */}
            <div className="border-b md:border-b-0 md:border-r border-[#d8c39a] p-6 sm:p-10">

              <h2 className="text-2xl sm:text-3xl text-gray-800 font-serif mb-6">
                📖 Bugün
              </h2>

              <p className="text-gray-700 leading-8 sm:leading-10 font-serif text-base sm:text-lg">
                Bugün hissettiklerimizi,
                <br />
                yaşadığımız güzel anları,
                <br />
                birbirimize söylemek isteyip de söyleyemediklerimizi
                <br />
                buraya yazacağız.
                <br />
                <br />
                Yıllar sonra bu sayfaları açtığımızda
                bugünü yeniden yaşayacağız.
              </p>

              <div className="mt-10 text-gray-500 italic text-lg">
                Damla 🤍 Uğur
              </div>

            </div>

            {/* Sağ Sayfa */}
            <div className="p-6 sm:p-10">

              <h2 className="text-2xl sm:text-3xl text-gray-800 font-serif mb-6">
                ✍️ Günlük Sayfası
              </h2>

              <NoteBox storageKey="ortak-gunluk" />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
