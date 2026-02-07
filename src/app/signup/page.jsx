'use client';

import LoginForm from '../AuthComponents/LoginForm';
import AuthSideCard from '../AuthComponents/AuthSideCard';

export default function LoginPage() {
  return (
    // MAIN PAGE CONTAINER
    // bg-[var(--background)] => edit page background color here
    <div className="h-screen w-full flex items-center justify-center bg-[var(--background)] px-4">
      
      {/* GRID WRAPPER */}
      {/* max-w-6xl => container width, h-[680px] => container height */}
      <div className="relative w-full max-w-6xl h-[680px] grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden shadow-xl">
        
        {/* LEFT: LOGIN FORM CARD */}
        <div
          className="
            flex items-center justify-center
            px-6 lg:px-12 py-8
            bg-gradient-to-tr from-black/90 via-yellow-900/10 to-yellow-800/20
            rounded-3xl
          "
        >
          {/* <-- EDIT bg-gradient TO CHANGE FORM CARD COLOR / GRADIENT --> */}
          <LoginForm />
        </div>

        {/* RIGHT: BRANDING + FLOATING ICONS */}
        <div className="hidden lg:flex items-center justify-center">
          {/* <-- EDIT AuthSideCard.jsx for right side background & gradient --> */}
          <AuthSideCard />
        </div>
      </div>
    </div>
  );
}
