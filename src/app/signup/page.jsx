'use client';

import LoginForm from '../AuthComponents/LoginForm';
import AuthSideCard from '../AuthComponents/AuthSideCard';

export default function LoginPage() {
  return (
    // FULL PAGE — no scrolling
    <div className="h-screen overflow-hidden bg-[#0B0B0B] text-yellow-900">

      {/* ================= HEADER ================= */}
      <header
        className="
          sticky top-0 z-50
          w-full
          bg-gradient-to-r from-[#403308] via-[#370202] to-[#1a1400]
          border-b border-yellow-100/10
        "
      >
        <h1
          className="
             
            py-4
            text-lg sm:text-2xl md:text-3xl lg:text-4xl
            font-bold
            tracking-tight
            text-yellow-400
            ml-6 sm:ml-12
          "
        >
          Welcome back to Koshur Scientist
        </h1>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="h-[calc(100vh-72px)] w-full flex items-center justify-center px-4">
        <div
          className="
            relative
            w-full max-w-6xl h-[680px]
            grid grid-cols-1 lg:grid-cols-2 gap-8
            rounded-3xl overflow-hidden
            shadow-[0_20px_60px_-15px_rgba(250,204,21,0.25)]
          "
        >
          {/* LEFT */}
          <div className="
            flex items-center justify-center
            px-6 lg:px-12 py-8
            bg-gradient-to-tr from-black/90 via-yellow-900/10 to-yellow-800/20
            rounded-3xl
          ">
            <LoginForm />
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center justify-center">
            <AuthSideCard />
          </div>
        </div>
      </main>
    </div>
  );
}
