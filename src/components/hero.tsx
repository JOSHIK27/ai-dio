import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6]">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#1E3A8A]">
            Never Miss a Task Again
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Our AI-powered app records your voice, analyzes your tasks, and
            sends timely reminders via email or calendar.
          </p>
        </div>
        <div className="space-x-4">
          <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
            Get Started
          </Button>
          <Button variant="outline" className="border-[#1E3A8A] text-[#1E3A8A]">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
