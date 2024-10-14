import Link from "next/link";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/howitworks";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
