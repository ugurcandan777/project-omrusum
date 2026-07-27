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
  const [loading, setLoading] = useState(false);

  async function login() {
    if (loading) return;

    setLoading(true);
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
    } catch {
      setError("Sunucuya bağlanılamadı.");
    }

    setLoading(false);
  }

  return (
    <main className="relative min-h-screen overflow-y-auto bg-gradient-to-b from-[#050816] via-[#081c40] to-[#020611] flex items-center justify-center px-5 py-10">

      <Stars />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square bg-blue-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[60vw] max-w-[500px] aspect-square bg-pink-500/10 blur-[150px]" />

      <div className="relative z-10 w-full max-w-md">

        <div
          className="
          glass
          rounded-[34px]
          shadow-2xl
          p-7
          sm:p-8
          md:p-10
          backdrop-blur-xl
          "
        >

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            🤍 Hoş Geldin
          </h1>

          <p className="text-center text-gray-300 italic mt-4">
            Sadece ikimizin bildiği küçük dünyamıza giriş...
          </p>

          <div className="mt-9">

            <label className="text-gray-300 text-sm">
              Kullanıcı Adı
            </label>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              placeholder="Kullanıcı Adı"
              autoComplete="username"
              className="
                mt-2
                w-full
                rounded-2xl
                bg-white/10
                border
                border-white/20
                px-5
                py-4
                text-white
                outline-none
                focus:border-pink-400
                transition
              "
            />

          </div>

          <div className="mt-7">

            <label className="text-gray-300 text-sm">
              Şifre
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                autoComplete="current-password"
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
                  text-white
                  outline-none
                  focus:border-pink-400
                  transition
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xl"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>

          <button
            onClick={login}
            disabled={loading}
            className="
              mt-8
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-purple-500
              py-4
              text-xl
              font-bold
              text-white
              shadow-[0_0_30px_rgba(236,72,153,.45)]
              active:scale-95
              transition
              disabled:opacity-60
            "
          >
            {loading ? "Giriş Yapılıyor..." : "❤️ Giriş Yap"}
          </button>

          {error && (
            <p className="text-center text-red-400 mt-5">
              {error}
            </p>
          )}

          {success && (
            <p className="text-center text-green-400 mt-5">
              ❤️ Hoş geldin Ömrüşüm...
            </p>
          )}

        </div>

        {/* iPhone Safe Area */}
        <div className="h-8" />

      </div>

    </main>
  );
}
