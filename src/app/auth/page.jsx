// 'use client';

// import GoogleAuthButton from '../components/forms/GooglrAuthButton';
// // app/demo/page.jsx
// import Button from "../components/forms/Button";
// import TextField from '../components/forms/TextField';  

// export default function DemoPage() {
//   return (
//     <div className="p-10 space-y-6 bg-gray-600 min-h-screen">
//       <Button>Primary Button</Button>
//       <TextField label="Email" placeholder="Enter your email" />
//       <GoogleAuthButton />
//     </div>
//   );
// }
'use client';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Button>LMS Button Works</Button>
    </main>
  );
}
