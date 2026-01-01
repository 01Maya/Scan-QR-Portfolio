import { FlipWords } from "@/components/ui/flip-words";

export default function ScanNowHeading() {
  const words = ["scan", "explore", "discover", "connect"];
  
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        <span className="text-gray-900 dark:text-white">
          <FlipWords words={words} duration={2000} /> now!
        </span>
      </div>
    </div>
  );
}
