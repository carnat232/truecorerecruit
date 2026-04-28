import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { DualCTA } from "@/components/sections/DualCTA";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => (
  <Layout>
    <Hero />
    <DualCTA />
    <WhyChoose />
    <Testimonials />
    <FinalCTA />
  </Layout>
);

export default Index;
