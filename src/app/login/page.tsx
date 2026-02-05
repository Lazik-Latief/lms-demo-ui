'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-5">
        <h1 className="text-2xl font-semibold text-center">
          LMS Login
        </h1>

        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <Button className="w-full">
          Sign In
        </Button>

        <p className="text-sm text-center text-gray-500">
          Forgot password?
        </p>
      </div>
    </div>
  );
}
