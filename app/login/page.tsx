"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Stars from "@/components/Stars";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function login() {
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.ok) {
        localStorage.setItem("logged", "true");

        setSuccess(true);

        setTimeout(() => {
          router.push("/home");
        }, 1200);
      } else {
        setError("Kullanıcı adı veya şifre yanlış.");

        setTimeout(() => {
          setError("");
        }, 2500);
      }
    } catch (err) {
      console.error(err);
      setError("Sunucuya bağlanılamadı.");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#081c40] to-[#020611] flex items-center justify-center px-5 py-10">

      <Stars />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square bg-blue-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[60vw] max-w-[500px] aspect-square bg-pink-500/10 blur-[150px]" />

      <div className="relative z-10 w-full max-w-xl">

        <div className="glass rounded-[32px] md:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-10">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            🤍 Hoş Geldin
          </h1>

          <p className="text-center text-gray-300 italic mt-5 text-sm sm:text-base">
            Sadece ikimizin bildiği küçük dünyamıza giriş...
          </p>

          <div className="mt-10">

            <label className="text-gray-300 text-sm">
              Kullanıcı Adı
            </label>

            <input
              value={username}
              onKeyDown={(e) => e.key === "Enter" && login()}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı Adı"
              className="
                mt-2
                w-full
                rounded-2xl
                bg-white/10
                border
                border-white/20
                px-5
                py-4
                outline-none
                text-white
                placeholder:text-gray-500
                focus:border-pink-400
                focus:ring-2
                focus:ring-pink-400/30
                transition
              "
            />

          </div>

          <div className="mt-8">

            <label className="text-gray-300 text-sm">
              Şifre
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onKeyDown={(e) => e.key === "Enter" && login()}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                className="
                  w-full
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/20
                  px-5
                  py-4
                  pr-16
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-pink-400
                  focus:ring-2
                  focus:ring-pink-400/30
                  transition
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>

          <button
            onClick={login}
            className="
              breathe
              mt-10
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              via-pink-400
              to-purple-500
              py-4
              text-lg
              md:text-xl
              font-bold
              text-white
              hover:scale-[1.03]
              active:scale-95
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(236,72,153,0.45)]
            "
          >
            ❤️ Giriş Yap
          </button>

          {error && (
            <p className="text-red-400 text-center mt-6">
              ❌ {error}
            </p>
          )}

          {success && (
            <p className="text-green-400 text-center mt-6 text-lg">
              ❤️ Hoş geldin Ömrüşüm...
            </p>
          )}

        </div>

      </div>

    </main>
  );
}
