import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Method } from "@/components/sections/Method";
import { Services } from "@/components/sections/Services";
import { Offer } from "@/components/sections/Offer";
import { TopBar } from "@/components/Scarcity";
import { Exclusive } from "@/components/sections/Exclusive";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Method />
        <Services />
        <Offer />
        <Exclusive />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
