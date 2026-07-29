"use client";

const reasons = [
  "Çünkü gülüşün bütün günümü güzelleştiriyor.",
  "Çünkü yanında kendim olabiliyorum.",
  "Çünkü bana huzurun ne demek olduğunu öğrettin.",
  "Çünkü en küçük şeylerle bile mutlu olabiliyorsun.",
  "Çünkü gözlerinin içine baktığımda bütün dünya duruyor.",
  "Çünkü sen benim evimsin.",
  "Çünkü iyi ki varsın Ömrüşüm. 🤍",
];

export default function LoveReasons() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* Arka plan ışığı */}

      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-pink-400/10 blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <h2 className="text-center text-5xl md:text-6xl font-bold mb-24">
          Seni Neden Seviyorum?
        </h2>

        <div className="space-y-12">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="
                glass
                rounded-[35px]
                p-10
                transition-all
                duration-500
                hover:scale-[1.03]
                hover:-translate-y-2
                hover:bg-white/10
                hover:shadow-[0_0_80px_rgba(255,255,255,.08)]
              "
            >

              <div className="flex items-center gap-8">

                <div className="text-5xl heartbeat">
                  🤍
                </div>

                <p className="text-xl md:text-2xl leading-10 text-gray-200">
                  {reason}
                </p>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-24">

          <p className="text-3xl italic text-gray-300 leading-relaxed">
            Ve bunlar...
            <br />
            Sadece anlatabildiklerim.
          </p>

        </div>

      </div>

    </section>
  );
}
