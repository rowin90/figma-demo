import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnershipVision from "@/components/PartnershipVision";
import InfluencerCollaborations from "@/components/InfluencerCollaborations";
import PartnershipCollaborations from "@/components/PartnershipCollaborations";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <Header />
      <Hero />
      <main className="w-full">
        <ContactSection />
        <div className="max-w-[1280px] mx-auto px-20 py-[60px] space-y-20">
          <PartnershipVision />
          <InfluencerCollaborations />
          <PartnershipCollaborations />
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
