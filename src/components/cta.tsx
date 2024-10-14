import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTA() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#1E3A8A] text-white"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
              Sign up now and never miss an important task again. Try our
              AI-powered task reminder for free!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-2">
              <Input
                className="bg-white text-[#1F2937]"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
                Sign Up for Free
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
