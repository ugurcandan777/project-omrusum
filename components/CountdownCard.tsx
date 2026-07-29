"use client";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        glass
        rounded-3xl
        w-24
        h-28
        flex
        flex-col
        items-center
        justify-center
        border
        border-white/10
        shadow-xl
        backdrop-blur-2xl
        hover:scale-105
        transition-all
        duration-500
      "
    >
      <span className="text-4xl font-extrabold text-white">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-2 text-xs uppercase tracking-[3px] text-gray-400">
        {label}
      </span>
    </div>
  );
}

export default function CountdownCard({
  days,
  hours,
  minutes,
  seconds,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <TimeCard value={days} label="Gün" />

      <TimeCard value={hours} label="Saat" />

      <TimeCard value={minutes} label="Dakika" />

      <TimeCard value={seconds} label="Saniye" />

    </div>
  );
}
