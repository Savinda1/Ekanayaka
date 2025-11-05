import { SignIn } from "@clerk/clerk-react";
import bgImage from "../assets/video/2.jpeg";

export default function SignInPage() {
  return (
    <main className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      

      {/* Centered SignIn Form */}
      <div className="relative z-10 flex items-center justify-center w-full px-4 max-w-md">
          <SignIn />
      
      </div>
    </main>
  );
}
