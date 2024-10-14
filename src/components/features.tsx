import { Mic, CheckCircle, Calendar } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1E3A8A]">
        Key Features
      </h2>
      <div className="grid gap-8 md:grid-cols-3 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white shadow-md">
          <Mic className="h-12 w-12 text-[#0D9488]" />
          <h3 className="text-xl font-bold text-[#1F2937]">Voice Recording</h3>
          <p className="text-gray-500 text-center">
            Easily record your tasks using our intuitive voice interface.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white shadow-md">
          <CheckCircle className="h-12 w-12 text-[#0D9488]" />
          <h3 className="text-xl font-bold text-[#1F2937]">AI Task Analysis</h3>
          <p className="text-gray-500 text-center">
            Our AI identifies and prioritizes your most important tasks.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white shadow-md">
          <Calendar className="h-12 w-12 text-[#0D9488]" />
          <h3 className="text-xl font-bold text-[#1F2937]">Smart Reminders</h3>
          <p className="text-gray-500 text-center">
            Receive timely reminders via email or directly in your calendar.
          </p>
        </div>
      </div>
    </section>
  );
}
