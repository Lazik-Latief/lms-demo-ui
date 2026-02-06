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
    <div
      className="
        min-h-screen
        w-full
        bg-[var(--background)]
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          grid
          w-full
          max-w-5xl
          grid-cols-1
          gap-8
          lg:grid-cols-2
        "
      >
        {/* Left: Login Form */}
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

        {/* Right: Branding Card */}
        <AuthSideCard />
      </div>
    </div>
  );
}
