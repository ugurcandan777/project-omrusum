"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  subtitle: string;
  file: string;
  active: boolean;
  locked: boolean;
  onPlay: () => void;
};

export default function VoiceItem({
  title,
  subtitle,
  file,
  active,
  locked,
  onPlay,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (active && !locked) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTime(0);
    }
  }, [active, locked]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const loaded = () => setDuration(audio.duration);

    const update = () => {
      setCurrentTime(audio.currentTime);
    };

    const ended = () => {
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  function format(seconds: number) {
    if (!seconds) return "00:00";

    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function seekForward() {
  const audio = audioRef.current;
  if (!audio) return;

  audio.currentTime = Math.min(
    audio.currentTime + 10,
    audio.duration || duration
  );

  setCurrentTime(audio.currentTime);
}

 function seekBackward() {
  const audio = audioRef.current;
  if (!audio) return;

  audio.currentTime = Math.max(
    audio.currentTime - 10,
    0
  );

  setCurrentTime(audio.currentTime);
}

  const progress =
    duration === 0 ? 0 : (currentTime / duration) * 100;

  return (
    <div
      className={`
        rounded-[32px]
        p-8
        transition-all
        duration-500
        border
        ${
          active
            ? "border-pink-400 shadow-[0_0_35px_rgba(236,72,153,.35)] bg-white/10"
            : "border-white/10 bg-white/5 hover:bg-white/10"
        }
      `}
    >
      <div className="text-5xl mb-5">
        {locked ? "🔒" : active ? "🎙️" : "🤍"}
      </div>

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-gray-300 leading-8">
        {subtitle}
      </p>

      {!locked && (
        <>
          <div className="mt-8">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>{format(currentTime)}</span>
              <span>{format(duration)}</span>
            </div>
          </div>
        </>
      )}

      <div className="flex items-center justify-center gap-6 mt-8">

        {locked ? (

          <button
            onClick={() =>
              alert(`🤍

Bunu dinlemek için biraz daha sabretmen gerekiyor...

Her ses kaydı sana doğru zamanda açılacak.

Sürprizin güzelliği biraz da beklemekte gizli.`)
            }
            className="rounded-full bg-white/10 border border-white/20 px-8 py-3 font-bold hover:bg-white/20 transition-all"
          >
            🔒 Yakında
          </button>

        ) : (

          <>
            <button
              onClick={seekBackward}
              className="text-2xl hover:scale-110 transition"
            >
              ⏮️
            </button>

            <button
              onClick={onPlay}
              className="rounded-full bg-white text-[#081229] px-8 py-3 font-bold hover:scale-105 transition-all"
            >
              {active ? "⏸" : "▶"}
            </button>

            <button
              onClick={seekForward}
              className="text-2xl hover:scale-110 transition"
            >
              ⏭️
            </button>
          </>

        )}

      </div>

      <audio
  ref={audioRef}
  src={file}
  preload="metadata"
  controls={false}
/>
    </div>
  );
}
