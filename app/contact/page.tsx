import type { Metadata } from "next";
import ContactFaq from "@/components/Contact/ContactFaq";
import ContactHero from "@/components/Contact/ContactHero";
import GetInTouch from "@/components/Contact/GetInTouch";
import HowCanWeHelp from "@/components/Contact/HowCanWeHelp";
import MessageForm from "@/components/Contact/MessageForm";
import NeedHelp from "@/components/Contact/NeedHelp";
import OurLocation from "@/components/Contact/OurLocation";

export const metadata: Metadata = {
  title: "Contact Us | Jobs 360",
  description: "Contact Jobs360.lk for job seeker support, employer help, and general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <ContactHero />

      <div className="mx-auto mt-8 grid max-w-[88%] items-stretch gap-8 lg:grid-cols-[40%_60%]">
        <GetInTouch />
        <MessageForm />
      </div>

      <div className="mt-10">
        <HowCanWeHelp />
      </div>

      <div className="mt-9">
        <OurLocation />
      </div>

      <div className="mt-9">
        <ContactFaq />
      </div>

      <div className="mb-10 mt-10">
        <NeedHelp />
      </div>
    </main>
  );
}
