"use client";

import Image from "next/image";

export default function BirthdayPhoto() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="glass max-w-2xl rounded-[40px] p-10 text-center">

        <Image
          src="/images/birthday-photo.JPG"
          alt="Biz"
          width={500}
          height={650}
          className="rounded-3xl mx-auto shadow-2xl"
        />

        <p className="mt-8 text-xl italic text-gray-300 leading-9">

          Bu fotoğrafa her baktığımda...

          <br />

          Kalbim yine ilk günkü gibi atıyor.

          <br /><br />

          Çünkü bu karede...

          Benim bütün dünyam var.

        </p>

      </div>

    </section>
  );
}

