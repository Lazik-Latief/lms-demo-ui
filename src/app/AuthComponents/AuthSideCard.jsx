'use client';

import FloatingIcons from './FloatingIcons';

export default function AuthSideCard() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center
                 bg-gradient-to-tr from-black/90 via-yellow-900/10 to-yellow-800/20
                 rounded-3xl overflow-hidden"
    >
      {/* <-- EDIT bg-gradient TO CHANGE RIGHT SIDE BACKGROUND --> */}

      {/* FLOATING ORBIT ICONS */}
      <FloatingIcons />

      {/* CENTER CHARACTER / ILLUSTRATION */}
      <div className="absolute z-20 w-48 h-48 flex items-center justify-center">
        <img
          src="AuthComponents/symbols/character-typing.png"
          alt="Branding Character"
          className="w-full h-full object-contain"
        />
      </div>

      {/* BRANDING TEXT AT BOTTOM */}
      <div className="absolute bottom-10 text-center w-full px-4 z-20">
        <h2 className="text-2xl font-bold text-yellow-300">Koshur LMS</h2>
        <p className="text-sm text-yellow-400/80">Learn, Practice & Grow</p>
      </div>
    </div>
  );
}
