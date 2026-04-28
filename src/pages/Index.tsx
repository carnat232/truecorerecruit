import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  AboutPreview,
  EmployersPreview,
  CandidatesPreview,
  ProcessPreview,
  TeamPreview,
  TestimonialsPreview,
  FAQPreview,
  ContactPreview,
} from "@/components/sections/PreviewSections";

const Index = () => (
  <Layout>
    <Hero />
    <AboutPreview />
    <WhyChoose />
    <EmployersPreview />
    <CandidatesPreview />
    <ProcessPreview />
    <TeamPreview />
    <TestimonialsPreview />
    <FAQPreview />
    <ContactPreview />
    <FinalCTA />
  </Layout>
);

export default Index;
