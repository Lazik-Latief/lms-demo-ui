'use client';

import FormWrapper from '../AuthComponents/FormWrapper';
import TextField from '../AuthComponents/InputField';
import PasswordInput from '../AuthComponents/PasswordInput';
import Checkbox from '../AuthComponents/Checkbox';
import Divider from '../AuthComponents/Divider';
import GoogleAuthButton from '../AuthComponents/Googlebtn';
import Button from '../AuthComponents/Button-New';
import AuthSideCard from '../AuthComponents/AuthSideCard';

export default function LoginPage() {
  return (
    /* =====================================================
       PAGE ROOT
       - h-screen → NO SCROLL
       - overflow-hidden → symbols never cause scroll
       - dark base background
    ===================================================== */
    <div className="h-screen w-full overflow-hidden bg-black flex items-center justify-center px-4">
      
      {/* =====================================================
         MAIN AUTH CONTAINER (JOINED CARD)
         - rounded + glass look
         - same height for both sides
      ===================================================== */}
      <div className="relative w-full max-w-6xl h-[640px] grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden glass-panel">

        {/* ================= LEFT: LOGIN FORM ================= */}
        <div className="flex items-center justify-center px-8">
          <FormWrapper
            title="Welcome back"
            subtitle="Sign in to continue to Koshur LMS"
          >
            <div className="flex flex-col gap-4">
              <TextField
                label="Email or Phone"
                placeholder="you@example.com"
              />

              <PasswordInput />

              <div className="flex items-center justify-between">
                <Checkbox label="Remember me" />
                <span className="text-sm text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]">
                  Forgot password?
                </span>
              </div>

              <Button className="w-full">
                Sign In
              </Button>

              <Divider />

              <GoogleAuthButton />
            </div>
          </FormWrapper>
        </div>

        {/* ================= RIGHT: BRANDING / ORBIT ================= */}
        <AuthSideCard />

      </div>
    </div>
  );
}
