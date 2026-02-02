import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Analytics from "@/components/Analytics";
import CreatorTools from "@/components/CreatorTools";
import Pricing from "@/components/Pricing";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Analytics />
      <CreatorTools />
      <Pricing />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
