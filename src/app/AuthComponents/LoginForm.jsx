'use client';

import FormWrapper from '../AuthComponents/FormWrapper';
import TextField from '../AuthComponents/InputField';
import PasswordInput from '../AuthComponents/PasswordInput';
import Checkbox from '../AuthComponents/Checkbox';
import Divider from '../AuthComponents/Divider';
import GoogleAuthButton from '../AuthComponents/Googlebtn';
import Button from '../AuthComponents/Button-New';

export default function LoginForm() {
  return (
    <FormWrapper
      title="Koshur Scientist "
      subtitle="Welcome back! Please enter your details to sign in."
      className="w-full   max-w-7xl  "
    >
      {/* FORM INNER CONTAINER */}
      {/* bg-gradient => edit form card background or gradient */}
      <div className="relative w-full h-full flex  items-center justify-center
                      bg-linear-to-tr from-black/90 via-yellow-900/10 to-yellow-800/20
                      rounded-2xl p-8 shadow-lg           /* ⬅ width control */
         /* ⬅ height control */">
        
        <div className="flex flex-col gap-5 w-full">
          {/* EMAIL / PHONE INPUT */}
          <TextField label="Email or Phone" placeholder="you@example.com" />

          {/* PASSWORD INPUT */}
          <PasswordInput />

          {/* REMEMBER ME + FORGOT PASSWORD */}
          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />
            <span className="text-sm text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]">
              Forgot password?
            </span>
          </div>

          {/* SIGN IN BUTTON */}
          <Button className="w-full py-2.5 text-sm font-medium">
            Sign In
          </Button>

          {/* DIVIDER LINE */}
          <Divider />

          {/* GOOGLE SIGN-IN BUTTON */}
          <GoogleAuthButton />
        </div>
      </div>
    </FormWrapper>
  );
}
