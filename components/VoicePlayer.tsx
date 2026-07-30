"use client";

import { useRef, useState } from "react";

type Props = {
  title: string;
  file: string;
};

export default function VoicePlayer({
  title,
  file,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  async function toggleAudio() {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (err) {
      console.error("Ses oynatılamadı:", err);
    }
  }

  return (
    <div
      className="
        glass
        rounded-[32px]
        p-8
        mt-10
        text-center
      "
    >
      <div className="text-6xl mb-6">
        🤍
      </div>

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <button
        onClick={toggleAudio}
        className="
          mt-8
          rounded-full
          bg-white
          text-[#081229]
          px-8
          py-3
          font-bold
          hover:scale-105
          transition-all
          duration-300
        "
      >
        {playing ? "⏸ Durdur" : "▶ Dinle"}
      </button>

      <audio
        ref={audioRef}
        src={file}
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
