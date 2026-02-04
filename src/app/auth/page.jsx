// 'use client';

// import { useState } from 'react';

// // Import reusable form components
// import TextField from '@/app/components/forms/TextField';
// import PasswordInput from '@/app/components/forms/PasswordInput';
// import Divider from '@/app/components/forms/Divider';
// import GoogleAuthButton from '@/app/components/forms/GooglrAuthButton';
// import FormWrapper from '@/app/components/forms/FormWrapper';
// import Button from '@/app/components/forms/Button';
 

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // fake delay (replace with API call)
//     setTimeout(() => {
//       setLoading(false);
//       console.log({ email, password });
//     }, 1200);
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      
//       <FormWrapper
//         title="Welcome back"
//         subtitle="Login to your LMS dashboard"
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Email */}
//           <TextField
//             label="Email address"
//             type="email"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {/* Password */}
//           <PasswordInput
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {/* Forgot password */}
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="text-xs font-medium text-[var(--accent-primary)] hover:underline"
//             >
//               Forgot password?
//             </button>
//           </div>

//           {/* Submit */}
//           <Button
//             type="submit"
//             disabled={loading}
//             className="w-full"
//           >
//             {loading ? 'Logging in…' : 'Login'}
//           </Button>
//         </form>

//         {/* Divider */}
//         <Divider text="OR" />

//         {/* Google login */}
//         <GoogleAuthButton />

//         {/* Footer */}
//         <p className="mt-5 text-center text-xs text-[var(--text-muted)]">
//           Don’t have an account?{' '}
//           <a
//             href="/signup"
//             className="font-medium text-[var(--accent-primary)] hover:underline"
//           >
//             Sign up
//           </a>
//         </p>
//       </FormWrapper>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';

// // Import reusable form components
import TextField from '@/app/components/forms/TextField';
import PasswordInput from '@/app/components/forms/PasswordInput';
import Divider from '@/app/components/forms/Divider';
import GoogleAuthButton from '@/app/components/forms/GooglrAuthButton';
import FormWrapper from '@/app/components/forms/FormWrapper';
import Button from '@/app/components/forms/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--color-background)] text-white">

      {/* ───────────────── LEFT BRAND PANEL ───────────────── */}
      <div className="relative hidden lg:flex flex-col justify-center px-16">
        
        {/* Soft yellow glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-md">
          {/* Logo / Brand */}
          <div className="mb-8 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[var(--color-primary)]" />
            <span className="text-lg font-semibold">Koshur Scientist</span>
          </div>

          {/* Hero text */}
          <h1 className="text-4xl font-semibold leading-tight">
            Empowering the next generation of{' '}
            <span className="text-[var(--color-primary)]">Scientists</span>
          </h1>

          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Join our digital learning ecosystem designed for modern explorers.
            Access world-class resources, interactive tools, and a community of innovators.
          </p>

          {/* Feature icons (simple placeholders) */}
          <div className="mt-10 flex gap-8 text-xs text-[var(--color-muted)]">
            <span>📘 Curriculum</span>
            <span>🧪 Lab Tools</span>
            <span>🌐 Network</span>
          </div>
        </div>
      </div>

      {/* ───────────────── RIGHT LOGIN PANEL ───────────────── */}
      <div className="flex items-center justify-center px-4">
        <FormWrapper
          title="Koshur Scientist"
          subtitle="Welcome back! Please enter your details to continue your journey."
          className="w-full max-w-md bg-[var(--color-card)]"
        >
          <form className="flex flex-col gap-4">
            
            {/* Email */}
            <TextField
              label="Email or Username"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[var(--color-muted)]">
                <input type="checkbox" className="accent-[var(--color-primary)]" />
                Remember me
              </label>

              <button
                type="button"
                className="text-[var(--color-primary)] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <Button type="submit" className="mt-2 w-full">
              Login to Account
            </Button>

            {/* Divider */}
            <Divider text="SOCIAL ACCESS" />

            {/* Google auth */}
            <GoogleAuthButton />

            {/* Footer link */}
            <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
              Don’t have an account?{' '}
              <span className="cursor-pointer text-[var(--color-primary)] hover:underline">
                Create your account
              </span>
            </p>
          </form>
        </FormWrapper>
      </div>
    </div>
  );
}
