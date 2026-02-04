 'use client';

// // import { useState } from 'react';

// // // Import reusable form components
// // import TextField from '@/components/forms/TextField';
// // import PasswordInput from '@/components/forms/PasswordInput';
// // import Divider from '@/components/forms/Divider';
// // import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
// // import FormWrapper from '@/components/forms/FormWrapper';
// // import Button from '@/components/forms/Button-New';

// // export default function LoginPage() {
// //   // ----------------------------
// //   // Form state
// //   // ----------------------------
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errors, setErrors] = useState({});

// //   // ----------------------------
// //   // Handle form submit
// //   // ----------------------------
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const newErrors = {};

// //     // Simple validation
// //     if (!email) newErrors.email = 'Email is required';
// //     if (!password) newErrors.password = 'Password is required';

// //     setErrors(newErrors);

// //     // If no errors → proceed with login logic
// //     if (Object.keys(newErrors).length === 0) {
// //       console.log('Logging in with:', { email, password });
// //     }
// //   };

// //   return (
// //     // Full page center layout
// //     <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      
// //       {/* Wrapper gives card UI, title & subtitle */}
// //       <FormWrapper
// //         title="Welcome back"
// //         subtitle="Login to your account"
// //       >
// //         {/* Login form */}
// //         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
// //           {/* Email input */}
// //           <TextField
// //             label="Email"
// //             type="email"
// //             placeholder="you@example.com"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             error={errors.email}
// //           />

// //           {/* Password input */}
// //           <PasswordInput
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             error={errors.password}
// //           />

// //           {/* Login button */}
// //           <Button type="submit" className="w-full">
// //             Login
// //           </Button>

// //           {/* Divider between auth methods */}
// //           <Divider text="OR" />

// //           {/* Google login */}
// //           <GoogleAuthButton
// //             onClick={() => console.log('Google login')}
// //           />
// //         </form>
// //       </FormWrapper>
// //     </div>
// //   );
// // }

// // 'use client';

// // import { useState } from 'react';

// // // Import reusable form components
// // import TextField from '@/components/forms/TextField';
// // import PasswordInput from '@/components/forms/PasswordInput';
// // import Divider from '@/components/forms/Divider';
// // import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
// // import FormWrapper from '@/components/forms/FormWrapper';
// // import Button from '@/components/forms/Button-New';

// // export default function LoginPage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     const newErrors = {};

// //     if (!email) newErrors.email = 'Email is required';
// //     if (!password) newErrors.password = 'Password is required';

// //     setErrors(newErrors);

// //     if (Object.keys(newErrors).length === 0) {
// //       console.log('Logging in with:', { email, password });
// //     }
// //   };


// // 'use client';

// // import { useState } from 'react';

// // // Import reusable form components
// // import TextField from '@/components/forms/TextField';
// // import PasswordInput from '@/components/forms/PasswordInput';
// // import Divider from '@/components/forms/Divider';
// // import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
// // import FormWrapper from '@/components/forms/FormWrapper';
// // import Button from '@/components/forms/Button-New';

// // export default function LoginPage() {
// //   // ----------------------------
// //   // Form state
// //   // ----------------------------
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errors, setErrors] = useState({});

// //   // ----------------------------
// //   // Handle form submit
// //   // ----------------------------
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const newErrors = {};

// //     // Simple validation
// //     if (!email) newErrors.email = 'Email is required';
// //     if (!password) newErrors.password = 'Password is required';

// //     setErrors(newErrors);

// //     // If no errors → proceed with login logic
// //     if (Object.keys(newErrors).length === 0) {
// //       console.log('Logging in with:', { email, password });
// //     }
// //   };





// //   return (
// //     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
      
// //       {/* LEFT SIDE — TEXT / BRANDING */}
// //       <div className="hidden lg:flex flex-col justify-center px-20 gap-6">
// //         <h1 className="text-5xl font-semibold text-foreground leading-tight">
// //           Welcome back 👋
// //         </h1>

// //         <p className="text-lg text-muted-foreground max-w-md">
// //           Login to access your dashboard, manage your learning, and continue where you left off.
// //         </p>

// //         <ul className="space-y-3 text-muted-foreground">
// //           <li className="flex items-center gap-2">• Secure authentication</li>
// //           <li className="flex items-center gap-2">• Fast & modern interface</li>
// //           <li className="flex items-center gap-2">• Built for productivity</li>
// //         </ul>
// //       </div>

// //       {/* RIGHT SIDE — LOGIN CARD */}
// //       <div className="flex items-center justify-center px-4">
// //         <div
// //           className="
// //             w-full max-w-md
// //             rounded-2xl
// //             bg-background
// //             border border-border
// //             shadow-lg
// //             p-8
// //             transition-all
// //           "
// //         >
// //           <FormWrapper
// //             title="Welcome back"
// //             subtitle="Login to your account"
// //           >
// //             <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
// //               {/* Email */}
// //               <TextField
// //                 label="Email"
// //                 type="email"
// //                 placeholder="you@example.com"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 error={errors.email}
// //               />

// //               {/* Password */}
// //               <PasswordInput
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 error={errors.password}
// //               />

// //               {/* Login Button */}
// //               <Button
// //                 type="submit"
// //                 className="
// //                   w-full
// //                   transition-all
// //                   hover:shadow-md
// //                   hover:translate-y-[-1px]
// //                   active:translate-y-0
// //                 "
// //               >
// //                 Login
// //               </Button>

// //               {/* Divider */}
// //               <Divider text="OR" />

// //               {/* Google Auth */}
// //               <GoogleAuthButton
// //                 onClick={() => console.log('Google login')}
// //                 className="hover:bg-foreground/5 transition"
// //               />
// //             </form>
// //           </FormWrapper>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // 'use client';

// // import { useState } from 'react';
// // import TextField from '@/components/forms/TextField';
// // import PasswordInput from '@/components/forms/PasswordInput';
// // import Divider from '@/components/forms/Divider';
// // import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
// // import FormWrapper from '@/components/forms/FormWrapper';
// // import Button from '@/components/forms/Button-New';
// // import { BookOpen, Brain, Sigma, Atom } from 'lucide-react';

// // export default function LoginPage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errors, setErrors] = useState({});

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const newErrors = {};
// //     if (!email) newErrors.email = 'Email is required';
// //     if (!password) newErrors.password = 'Password is required';
// //     setErrors(newErrors);
// //     if (Object.keys(newErrors).length === 0) {
// //       console.log('Logging in with:', { email, password });
// //     }
// //   };

// //   return (
// //     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
      
// //       {/* LEFT — ANIMATED BRAND SECTION */}
// //       <div className="relative hidden lg:flex overflow-hidden items-center justify-center">
// //         {/* Gradient */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               'linear-gradient(120deg, var(--background), var(--foreground), var(--skeleton))',
// //           }}
// //         />

// //         {/* Floating icons */}
// //         <div className="absolute inset-0 pointer-events-none">
// //           <BookOpen className="absolute top-24 left-20 text-foreground/40 animate-[float_8s_ease-in-out_infinite]" />
// //           <Brain className="absolute bottom-32 left-32 text-foreground/30 animate-[float_10s_ease-in-out_infinite]" />
// //           <Sigma className="absolute top-40 right-32 text-foreground/40 animate-[float_9s_ease-in-out_infinite]" />
// //           <Atom className="absolute bottom-24 right-24 text-foreground/30 animate-[float_11s_ease-in-out_infinite]" />
// //         </div>

// //         {/* Text */}
// //         <div className="relative z-10 max-w-md px-12 space-y-6">
// //           <h1 className="text-5xl font-semibold text-foreground leading-tight">
// //             Learn without limits
// //           </h1>
// //           <p className="text-lg text-muted-foreground">
// //             Access your courses, track progress, and continue your learning journey
// //             with a modern, distraction-free experience.
// //           </p>
// //         </div>
// //       </div>

// //       {/* RIGHT — LOGIN CARD */}
// //       <div className="flex items-center justify-center px-4">
// //         <div className="w-full max-w-md">
// //           <div className="rounded-2xl border border-border bg-background shadow-lg p-8 transition-all">
// //             <FormWrapper title="Welcome back" subtitle="Login to your account">
// //               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
// //                 <TextField
// //                   label="Email"
// //                   type="email"
// //                   placeholder="you@example.com"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   error={errors.email}
// //                 />

// //                 <PasswordInput
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   error={errors.password}
// //                 />

// //                 <Button
// //                   type="submit"
// //                   className="w-full transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
// //                 >
// //                   Login
// //                 </Button>

// //                 <Divider text="OR" />

// //                 <GoogleAuthButton
// //                   onClick={() => console.log('Google login')}
// //                   className="transition hover:bg-foreground/5"
// //                 />
// //               </form>
// //             </FormWrapper>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Animations */}
// //       <style jsx global>{`
// //         @keyframes float {
// //           0% {
// //             transform: translateY(0px);
// //           }
// //           50% {
// //             transform: translateY(-12px);
// //           }
// //           100% {
// //             transform: translateY(0px);
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }


// 'use client';

// // import { useState } from 'react';
// // import {
// //   BookOpen,
// //   Brain,
// //   Sigma,
// //   Atom,
// //   ShieldCheck,
// //   Cloud,
// //   Lock,
// // } from 'lucide-react';

// // import TextField from '@/components/forms/TextField';
// // import PasswordInput from '@/components/forms/PasswordInput';
// // import Divider from '@/components/forms/Divider';
// // import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
// // import FormWrapper from '@/components/forms/FormWrapper';
// // import Button from '@/components/forms/Button-New';

// // export default function LoginPage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errors, setErrors] = useState({});

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const newErrors = {};
// //     if (!email) newErrors.email = 'Email is required';
// //     if (!password) newErrors.password = 'Password is required';
// //     setErrors(newErrors);
// //   };

// //   return (
// //   <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background overflow-hidden">
    
// //     {/* LEFT — HERO / BRAND EXPERIENCE */}
// //     <div className="relative hidden lg:flex flex-col justify-center px-24 overflow-hidden">
      
// //       {/* base gradient */}
// //       <div
// //         className="absolute inset-0"
// //         style={{
// //           background:
// //             'linear-gradient(135deg, var(--background), var(--foreground), var(--background))',
// //         }}
// //       />

// //       {/* animated grid texture */}
// //       <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:48px_48px]" />

// //       {/* floating icons */}
// //       <BookOpen className="absolute top-28 left-24 text-foreground/30 animate-[float_10s_ease-in-out_infinite]" />
// //       <Brain className="absolute top-1/3 right-36 text-foreground/25 animate-[float_12s_ease-in-out_infinite]" />
// //       <Sigma className="absolute bottom-1/3 left-44 text-foreground/20 animate-[float_11s_ease-in-out_infinite]" />
// //       <Atom className="absolute bottom-28 right-28 text-foreground/30 animate-[float_13s_ease-in-out_infinite]" />

// //       {/* content */}
// //       <div className="relative z-10 max-w-xl space-y-8">
// //         <h1 className="text-6xl font-extrabold tracking-tight text-foreground leading-tight">
// //           Learn.<br />
// //           Build.<br />
// //           <span className="text-foreground/80">Advance.</span>
// //         </h1>

// //         <p className="text-lg text-muted-foreground max-w-lg">
// //           A focused learning platform designed for modern students,
// //           professionals, and builders who value progress.
// //         </p>

// //         <div className="flex items-center gap-3 text-muted-foreground">
// //           <ShieldCheck className="size-5" />
// //           <span className="text-sm uppercase tracking-widest">
// //             Secure • Trusted • Scalable
// //           </span>
// //         </div>
// //       </div>
// //     </div>

// //     {/* RIGHT — LOGIN EXPERIENCE */}
// //     <div className="flex items-center justify-center px-4">
// //       <div className="w-full max-w-md">
        
// //         <div
// //           className="
// //             relative
// //             rounded-3xl
// //             border border-border
// //             bg-background
// //             p-8
// //             shadow-[0_0_40px_rgba(0,0,0,0.45)]
// //             transition-all
// //             hover:shadow-[0_0_70px_rgba(0,0,0,0.65)]
// //           "
// //         >
// //           {/* glow ring */}
// //           <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-foreground/10" />

// //           <FormWrapper
// //             title="Welcome back"
// //             subtitle="Sign in to continue learning"
// //           >
// //             <form
// //               onSubmit={handleSubmit}
// //               className="flex flex-col gap-6 mt-6"
// //             >
// //               <TextField
// //                 label="Email"
// //                 type="email"
// //                 placeholder="you@example.com"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 error={errors.email}
// //               />

// //               <PasswordInput
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 error={errors.password}
// //               />

// //               <Button
// //                 type="submit"
// //                 className="
// //                   w-full
// //                   h-12
// //                   font-semibold
// //                   tracking-wide
// //                   bg-foreground
// //                   text-background
// //                   transition-all
// //                   hover:-translate-y-0.5
// //                   hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
// //                   active:translate-y-0
// //                 "
// //               >
// //                 Sign in to dashboard
// //               </Button>

// //               <Divider text="OR" />

// //               <GoogleAuthButton
// //                 onClick={() => console.log('Google login')}
// //                 className="
// //                   h-12
// //                   border border-border
// //                   transition-all
// //                   hover:bg-foreground/5
// //                   hover:scale-[1.01]
// //                   active:scale-[0.98]
// //                 "
// //               />
// //             </form>
// //           </FormWrapper>

// //           <p className="mt-6 text-center text-sm text-muted-foreground">
// //             New here?{' '}
// //             <a href="#" className="font-medium text-foreground hover:underline">
// //               Request access
// //             </a>
// //           </p>
// //         </div>

// //         {/* trust badges */}
// //         <div className="mt-8 flex justify-center gap-8 text-muted-foreground/60 text-xs">
// //           <div className="flex items-center gap-2">
// //             <Lock className="size-4" />
// //             ISO-27001
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <ShieldCheck className="size-4" />
// //             Encrypted
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <Cloud className="size-4" />
// //             99.9% SLA
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     {/* animation */}
// //     <style jsx global>{`
// //       @keyframes float {
// //         0% { transform: translateY(0); }
// //         50% { transform: translateY(-14px); }
// //         100% { transform: translateY(0); }
// //       }
// //     `}</style>
// //   </section>
// // );
// // }

// // //   return (
// // //     <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background overflow-hidden">
// // //       {/* LEFT — HERO / DECORATIVE */}
// // //       <div className="relative hidden lg:flex items-center justify-center px-20 overflow-hidden">
// // //         {/* gradient */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               'linear-gradient(120deg, var(--background), var(--foreground), var(--skeleton))',
// // //           }}
// // //         />

// // //         {/* subtle grid */}
// // //         <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:40px_40px]" />

// // //         {/* floating symbols */}
// // //         <BookOpen className="absolute top-24 left-24 text-foreground/30 animate-[float_9s_ease-in-out_infinite]" />
// // //         <Brain className="absolute top-1/3 right-32 text-foreground/25 animate-[float_11s_ease-in-out_infinite]" />
// // //         <Sigma className="absolute bottom-1/3 left-40 text-foreground/20 animate-[float_10s_ease-in-out_infinite]" />
// // //         <Atom className="absolute bottom-24 right-24 text-foreground/30 animate-[float_12s_ease-in-out_infinite]" />

// // //         {/* copy */}
// // //         <div className="relative z-10 max-w-xl space-y-6">
// // //           <h1 className="text-6xl font-extrabold tracking-tight text-foreground">
// // //             Learn without limits
// // //           </h1>
// // //           <p className="text-lg text-muted-foreground">
// // //             A professional learning platform built for focus, growth, and
// // //             long-term mastery.
// // //           </p>

// // //           <div className="flex items-center gap-3 text-muted-foreground">
// // //             <ShieldCheck className="size-5" />
// // //             <span className="text-sm uppercase tracking-widest">
// // //               Trusted academic platform
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* RIGHT — LOGIN */}
// // //       <div className="flex items-center justify-center px-4">
// // //         <div className="w-full max-w-md">
// // //           <div className="rounded-2xl border border-border bg-background shadow-lg p-8">
// // //             <FormWrapper
// // //               title="Welcome back"
// // //               subtitle="Sign in to your learning dashboard"
// // //             >
// // //               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
// // //                 <TextField
// // //                   label="Email"
// // //                   type="email"
// // //                   placeholder="you@example.com"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   error={errors.email}
// // //                 />

// // //                 <PasswordInput
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   error={errors.password}
// // //                 />

// // //                 <Button
// // //                   type="submit"
// // //                   className="w-full transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
// // //                 >
// // //                   Sign in to dashboard
// // //                 </Button>

// // //                 <Divider text="OR" />

// // //                 <GoogleAuthButton
// // //                   onClick={() => console.log('Google login')}
// // //                   className="hover:bg-foreground/5 transition"
// // //                 />
// // //               </form>
// // //             </FormWrapper>

// // //             {/* footer */}
// // //             <p className="mt-6 text-center text-sm text-muted-foreground">
// // //               New here?{' '}
// // //               <a href="#" className="font-medium text-foreground hover:underline">
// // //                 Request access
// // //               </a>
// // //             </p>
// // //           </div>

// // //           {/* trust badges */}
// // //           <div className="mt-8 flex justify-center gap-8 text-muted-foreground/60 text-xs">
// // //             <div className="flex items-center gap-2">
// // //               <Lock className="size-4" />
// // //               ISO-27001
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               <ShieldCheck className="size-4" />
// // //               Encrypted
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               <Cloud className="size-4" />
// // //               99.9% SLA
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* animations */}
// // //       <style jsx global>{`
// // //         @keyframes float {
// // //           0% {
// // //             transform: translateY(0);
// // //           }
// // //           50% {
// // //             transform: translateY(-14px);
// // //           }
// // //           100% {
// // //             transform: translateY(0);
// // //           }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }
// 'use client';

// import { useState } from 'react';
// import {
//   BookOpen,
//   Brain,
//   Sigma,
//   Atom,
//   ShieldCheck,
//   Lock,
//   Cloud,
// } from 'lucide-react';

// import TextField from '@/components/forms/TextField';
// import PasswordInput from '@/components/forms/PasswordInput';
// import Divider from '@/components/forms/Divider';
// import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
// import FormWrapper from '@/components/forms/FormWrapper';
// import Button from '@/components/forms/Button-New';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors(newErrors);
//   };

//   return (
//     <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background overflow-hidden">
      
//       {/* LEFT — HERO */}
//       <div className="relative hidden lg:flex flex-col justify-center px-24 overflow-hidden">
        
//         {/* gradient background */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(135deg, var(--background), var(--foreground), var(--background))',
//           }}
//         />

//         {/* grid texture */}
//         <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:48px_48px]" />

//         {/* floating icons (SAFE animations) */}
//         <BookOpen className="absolute top-24 left-24 text-foreground/30 animate-pulse" />
//         <Brain className="absolute top-1/3 right-36 text-foreground/25 animate-pulse" />
//         <Sigma className="absolute bottom-1/3 left-44 text-foreground/20 animate-pulse" />
//         <Atom className="absolute bottom-24 right-28 text-foreground/30 animate-pulse" />

//         {/* hero text */}
//         <div className="relative z-10 max-w-xl space-y-8">
//           <h1 className="text-6xl font-extrabold tracking-tight text-foreground leading-tight">
//             Learn.<br />
//             Build.<br />
//             <span className="text-foreground/80">Advance.</span>
//           </h1>

//           <p className="text-lg text-muted-foreground max-w-lg">
//             A modern learning platform crafted for focus, progress,
//             and real-world skill growth.
//           </p>

//           <div className="flex items-center gap-3 text-muted-foreground">
//             <ShieldCheck className="size-5" />
//             <span className="text-sm uppercase tracking-widest">
//               Secure • Trusted • Scalable
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT — LOGIN */}
//       <div className="flex items-center justify-center px-4">
//         <div className="w-full max-w-md">
          
//           <div
//             className="
//               relative
//               rounded-3xl
//               border border-border
//               bg-background
//               p-8
//               shadow-[0_0_40px_rgba(0,0,0,0.45)]
//               transition-all
//               hover:shadow-[0_0_60px_rgba(0,0,0,0.65)]
//             "
//           >
//             {/* subtle glow ring */}
//             <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-foreground/10" />

//             <FormWrapper
//               title="Welcome back"
//               subtitle="Sign in to continue learning"
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col gap-6 mt-6"
//               >
//                 <TextField
//                   label="Email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   error={errors.email}
//                 />

//                 <PasswordInput
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   error={errors.password}
//                 />

//                 <Button
//                   type="submit"
//                   className="
//                     w-full
//                     h-12
//                     font-semibold
//                     tracking-wide
//                     bg-foreground
//                     text-background
//                     transition-all
//                     hover:-translate-y-0.5
//                     hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
//                     active:translate-y-0
//                   "
//                 >
//                   Sign in to dashboard
//                 </Button>

//                 <Divider text="OR" />

//                 <GoogleAuthButton
//                   onClick={() => console.log('Google login')}
//                   className="
//                     h-12
//                     border border-border
//                     transition-all
//                     hover:bg-foreground/5
//                     hover:scale-[1.01]
//                     active:scale-[0.98]
//                   "
//                 />
//               </form>
//             </FormWrapper>

//             <p className="mt-6 text-center text-sm text-muted-foreground">
//               New here?{' '}
//               <a href="#" className="font-medium text-foreground hover:underline">
//                 Request access
//               </a>
//             </p>
//           </div>

//           {/* trust badges */}
//           <div className="mt-8 flex justify-center gap-8 text-muted-foreground/60 text-xs">
//             <div className="flex items-center gap-2">
//               <Lock className="size-4" />
//               ISO-27001
//             </div>
//             <div className="flex items-center gap-2">
//               <ShieldCheck className="size-4" />
//               Encrypted
//             </div>
//             <div className="flex items-center gap-2">
//               <Cloud className="size-4" />
//               99.9% SLA
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';

import TextField from '@/components/forms/TextField';
import PasswordInput from '@/components/forms/PasswordInput';
import Divider from '@/components/forms/Divider';
import GoogleAuthButton from '@/components/forms/GoogleAuthButton';
import FormWrapper from '@/components/forms/FormWrapper';
import Button from '@/components/forms/Button-New';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = 'Email required';
    if (!password) newErrors.password = 'Password required';
    setErrors(newErrors);
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center px-20 border-r border-border">
        <h1 className="text-5xl font-bold text-foreground leading-tight">
          Welcome to<br />Your LMS
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-md">
          A focused learning platform built for growth, discipline,
          and real-world skills.
        </p>

        <div className="mt-10 space-y-3 text-sm text-muted-foreground">
          <div>✔ Secure authentication</div>
          <div>✔ Progress tracking</div>
          <div>✔ Modern learning experience</div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-border bg-background p-8 shadow-lg">
            <FormWrapper
              title="Sign in"
              subtitle="Access your learning dashboard"
            >
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-5"
              >
                <TextField
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />

                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password}
                />

                <Button
                  type="submit"
                  className="w-full h-11 font-medium transition hover:opacity-90"
                >
                  Login
                </Button>

                <Divider text="OR" />

                <GoogleAuthButton className="transition hover:bg-foreground/5" />
              </form>
            </FormWrapper>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don’t have access?{' '}
              <span className="text-foreground font-medium cursor-pointer hover:underline">
                Contact admin
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


