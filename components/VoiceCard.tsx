"use client";

import { useRef, useState } from "react";

type Props = {
  title: string;
  subtitle: string;
  file: string;
};

export default function VoiceCard({
  title,
  subtitle,
  file,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  function toggleAudio() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div
      className="
      glass
      rounded-[32px]
      p-8
      transition-all
      duration-500
      hover:scale-[1.02]
      "
    >
      <div className="text-5xl mb-5">
        🤍
      </div>

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-gray-300 leading-8">
        {subtitle}
      </p>

      <button
        onClick={toggleAudio}
        className="
          mt-8
          rounded-full
          bg-white
          text-[#081229]
          px-7
          py-3
          font-bold
          hover:scale-105
          transition-all
        "
      >
        {playing ? "⏸ Durdur" : "▶ Dinle"}
      </button>

      <audio
        ref={audioRef}
        src={file}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
