'use client';

import LoginForm from '../AuthComponents/LoginForm';
import AuthSideCard from '../AuthComponents/AuthSideCard';

export default function LoginPage() {
  return (
    // MAIN CONTAINER: full screen, centers content horizontally and vertically
    <div className="h-screen w-full flex items-center justify-center bg-[var(--background)] px-4">
      
      {/* GRID WRAPPER: contains LEFT login form and RIGHT branding card */}
      <div className="relative w-full max-w-6xl h-[680px] grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden shadow-xl">
        
        {/* LEFT COLUMN: Login Form */}
        <div className="flex items-center justify-center px-6 lg:px-12 py-8 bg-[var(--card-background)] rounded-3xl">
          {/* <--- EDIT bg-[var(--card-background)] TO CHANGE FORM CARD COLOR */}
          <LoginForm />
        </div>

        {/* RIGHT COLUMN: Branding + Floating Icons */}
        <div className="hidden lg:flex items-center justify-center">
          {/* <--- EDIT AuthSideCard.jsx for background gradient and icons */}
          <AuthSideCard />
        </div>
      </div>
    </div>
  );
}
