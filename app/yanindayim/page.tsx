"use client";

import { useState } from "react";
import VoiceIntro from "@/components/VoiceIntro";
import VoiceItem from "@/components/VoiceItem";

const voices = [
  {
    id: 1,
    title: "Bugün Seninleyim",
    subtitle: "Kendini yalnız hissedersen dinle.",
    file: "/voices/bugun_seninleyim.mp3",
    locked: false,
  },
  {
    id: 2,
    title: "Derin Bir Nefes",
    subtitle: "Birlikte biraz rahatlayalım.",
    file: "/voices/derin_nefes.mp3",
    locked: true,
  },
  {
    id: 3,
    title: "Gülümse Biraz",
    subtitle: "Bugün yüzünü güldürmek istiyorum.",
    file: "/voices/gulumse.mp3",
    locked: true,
  },
  {
    id: 4,
    title: "Sana Bir Şey Söylemek İstiyorum",
    subtitle: "Sadece kalbimden geçenler...",
    file: "/voices/kalbimden.mp3",
    locked: true,
  },
];

export default function YanindayimPage() {
  const [activeVoice, setActiveVoice] = useState<number | null>(null);

  return (
    <main className="bg-[#020611] text-white overflow-x-hidden">

      <VoiceIntro />

      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {voices.map((voice) => (
            <VoiceItem
              key={voice.id}
              title={voice.title}
              subtitle={voice.subtitle}
              file={voice.file}
              locked={voice.locked}
              active={activeVoice === voice.id}
              onPlay={() =>
                setActiveVoice(
                  activeVoice === voice.id ? null : voice.id
                )
              }
            />
          ))}

        </div>

      </section>

    </main>
  );
}
