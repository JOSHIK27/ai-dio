export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6]"
    >
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1E3A8A]">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D9488] text-white">
              1
            </div>
            <h3 className="text-xl font-bold text-[#1F2937]">Record</h3>
            <p className="text-gray-500 text-center">
              Speak your tasks into the app using our voice recording feature.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D9488] text-white">
              2
            </div>
            <h3 className="text-xl font-bold text-[#1F2937]">Analyze</h3>
            <p className="text-gray-500 text-center">
              Our AI processes your audio and identifies important tasks and
              deadlines.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D9488] text-white">
              3
            </div>
            <h3 className="text-xl font-bold text-[#1F2937]">Remind</h3>
            <p className="text-gray-500 text-center">
              Receive personalized reminders via email or in your calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
