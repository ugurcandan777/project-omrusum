"use client";

export default function BirthdayVideo() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">

      <div className="glass max-w-5xl w-full rounded-[40px] p-8">

        <h2 className="text-4xl font-bold text-center mb-8">
          Bizden Küçük Bir Film 🎥
        </h2>

        <video
          controls
          playsInline
          className="w-full rounded-3xl shadow-2xl"
        >
          <source
            src="/videos/birthday.mp4"
            type="video/mp4"
          />
        </video>

        <p className="mt-10 text-center text-gray-300 leading-9 text-lg">
          Her saniyesi...
          <br />
          Bir ömür boyunca hatırlamak istediğim anlardan oluşuyor. 🤍
        </p>

      </div>

    </section>
  );
}
