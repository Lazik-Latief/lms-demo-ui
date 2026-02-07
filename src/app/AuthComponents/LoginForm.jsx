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
      title="Welcome back"
      subtitle="Sign in to continue to Koshur LMS"
      className="w-full max-w-md"
    >
      {/* FORM CARD BACKGROUND & SPACING */}
      <div className="relative w-full h-full flex items-center justify-center 
                bg-gradient-to-tr from-black/80 via-yellow-900/30 to-yellow-800/20 
                rounded-3xl overflow-hidden">
        {/* <-- EDIT THIS DIV TO CHANGE FORM CARD BACKGROUND GRADIENT --> */}

        {/* FORM FIELDS CONTAINER */}
        <div className="flex flex-col gap-5">
          {/* INPUT FIELD */}
          <TextField label="Email or Phone" placeholder="you@example.com" />

          {/* PASSWORD FIELD */}
          <PasswordInput />

          {/* REMEMBER ME + FORGOT PASSWORD */}
          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />
            <span className="text-sm text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]">
              Forgot password?
            </span>
          </div>

          {/* SIGN IN BUTTON */}
          <Button className="w-full">Sign In</Button>

          {/* DIVIDER LINE */}
          <Divider />

          {/* GOOGLE SIGN-IN */}
          <GoogleAuthButton />
        </div>
      </div>
    </FormWrapper>
  );
}
