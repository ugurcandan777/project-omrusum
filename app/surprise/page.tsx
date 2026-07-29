"use client";

import BirthdayIntro from "@/components/BirthdayIntro";
import BirthdayPhoto from "@/components/BirthdayPhoto";
import LoveReasons from "@/components/LoveReasons";
import BirthdayVideo from "@/components/BirthdayVideo";
import FinalScene from "@/components/FinalScene";
import CountdownCard from "@/components/CountdownCard";
import OpeningScene from "@/components/OpeningScene";

import { useEffect, useState } from "react";

export default function SurprisePage() {
  const [opened, setOpened] = useState(false);

 const unlockDate = new Date(2026, 7, 5, 0, 0, 0);

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = unlockDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (diff % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (diff % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (diff % (1000 * 60)) /
            1000
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const unlocked = new Date() >= unlockDate;

  if (!opened) {
    return (
      <OpeningScene
        onFinish={() => setOpened(true)}
      />
    );
  }

  if (!unlocked) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050B1D] via-[#081229] to-[#020611] text-white">

        {/* Arka plan kalbi */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[320px] opacity-[0.03] select-none">
            🤍
          </div>
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

          <div className="max-w-3xl w-full text-center">

            <div className="text-7xl mb-8">
              🤍
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
              5 Ağustos
            </h1>

            <p className="mt-5 text-xl text-gray-300">
              Her güzel sürpriz biraz sabır ister...
            </p>

            <CountdownCard
              days={countdown.days}
              hours={countdown.hours}
              minutes={countdown.minutes}
              seconds={countdown.seconds}
            />

            <div className="w-40 h-px bg-white/15 mx-auto mt-12" />

            <p className="mt-8 text-gray-400 italic leading-8">
              Sana hazırladığım bu günü...
              <br />
              Ben de en az senin kadar heyecanla bekliyorum. 🤍
            </p>

          </div>

        </div>

      </main>
    );
  }

   return (
    <main className="bg-[#020611] text-white overflow-x-hidden">

      <BirthdayIntro />

      <BirthdayPhoto />

      <LoveReasons />

      <BirthdayVideo />

      <FinalScene />

    </main>
  );
} 