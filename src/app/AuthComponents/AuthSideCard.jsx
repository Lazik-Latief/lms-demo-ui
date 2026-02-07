// 'use client';

// import FloatingIcons from './FloatingIcons';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// /**
//  * AuthSideCard
//  * Right-side orbiting 3D symbols + center character
//  */
// const SIZE = 1500;
// const CENTER_IMAGE = 220;

// export default function AuthSideCard() {
//   return (
//     <div className="relative hidden lg:flex w-full h-full items-center justify-center overflow-hidden">
//       {/* Background: gold + black gradient */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.22),rgba(0,0,0,0.9)_65%)]" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
//       </div>

//       {/* Orbit container */}
//       <motion.div
//         className="relative z-10"
//         style={{ width: SIZE, height: SIZE }}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
//       >
//         <FloatingIcons />

//         {/* Center character + glow */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.div
//             className="absolute rounded-full"
//             style={{ width: CENTER_IMAGE + 50, height: CENTER_IMAGE + 50 }}
//             animate={{
//               boxShadow: [
//                 '0 0 40px rgba(250,204,21,0.5)',
//                 '0 0 100px rgba(250,204,21,0.95)',
//                 '0 0 40px rgba(250,204,21,0.5)',
//               ],
//             }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <div
//   className="relative rounded-full overflow-hidden ring-2 ring-yellow-400/70"
//   style={{ width: CENTER_IMAGE, height: CENTER_IMAGE }}
//           >
//             <Image
//               src="/AuthComponents/symbols/character-typing.png"
//               alt="center-character"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
// 'use client';

// import FloatingIcons from './FloatingIcons';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// /**
//  * AuthSideCard
//  * Right-side orbiting 3D symbols + center character
//  */
// const SIZE = 1500;
// const CENTER_IMAGE = 220;

// export default function AuthSideCard() {
//   return (
//     <div className="relative hidden lg:flex w-full h-full items-center justify-center overflow-hidden">
//       {/* Background: premium radial + soft glow */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(250,204,21,0.25),rgba(0,0,0,0.95)_80%)]" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_5%,transparent_15%)] pointer-events-none" />
//       </div>

//       {/* Orbit container */}
//       <motion.div
//         className="relative z-10"
//         style={{ width: SIZE, height: SIZE }}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
//       >
//         <FloatingIcons />

//         {/* Center character + glow */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* Pulsing glow */}
//           <motion.div
//             className="absolute rounded-full"
//             style={{ width: CENTER_IMAGE + 60, height: CENTER_IMAGE + 60 }}
//             animate={{
//               boxShadow: [
//                 '0 0 40px rgba(250,204,21,0.5)',
//                 '0 0 120px rgba(250,204,21,0.95)',
//                 '0 0 40px rgba(250,204,21,0.5)',
//               ],
//               scale: [1, 1.05, 1],
//             }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//           />

//           {/* Slightly offset center character */}
//           <div
//             className="relative rounded-full overflow-hidden ring-2 ring-yellow-400/70"
//             style={{
//               width: CENTER_IMAGE,
//               height: CENTER_IMAGE,
//               transform: 'translate(-10px, 10px)',
//             }}
//           >
//             <Image
//               src="/AuthComponents/symbols/character-typing.png"
//               alt="center-character"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
'use client';

import FloatingIcons from './FloatingIcons';

export default function AuthSideCard() {
  return (
   <div className="relative w-full h-full flex items-center justify-center 
                bg-gradient-to-tr from-black/80 via-yellow-900/30 to-yellow-800/20 
                rounded-3xl overflow-hidden">

      {/* Floating Icons in the background */}
      <FloatingIcons />

      {/* Center Illustration / Branding */}
      <div className="absolute z-20 w-48 h-48 flex items-center justify-center">
        <img
          src="AuthComponents/symbols/character-typing.png"
          alt="Branding Character"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Optional: Branding Text */}
      <div className="absolute bottom-10 text-center w-full px-4 z-20">
        <h2 className="text-2xl font-bold text-black">Koshur LMS</h2>
        <p className="text-sm text-black/70">Learn, Practice & Grow</p>
      </div>
    </div>
  );
}
