"use client";

import AnimatedTestimonialsDemo from "../components/animated-testimonials-demo";

export default function SyntheticV0PageForDeployment() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8
      bg-gradient-to-br
      from-pink-50 via-purple-50 to-sky-50
      dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950
    ">
      <div className="w-full max-w-5xl">
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
}
