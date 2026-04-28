import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={hero} alt="Global recruitment team meeting" className="w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-overlay" />
    </div>

    <div className="container-pro relative z-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-8 text-primary-foreground">
        <p className="eyebrow text-accent-glow mb-5 animate-fade-up">Global Recruitment Excellence</p>
        <h1 className="heading-xl mb-6 animate-fade-up delay-100">
          Your Competitive Edge in <span className="text-gradient-gold">Global Recruitment</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-9 animate-fade-up delay-200 leading-relaxed">
          TrueCoreRecruit connects trusted employers with top-tier talent worldwide through structured,
          confidential and results-driven recruitment solutions.
        </p>

        <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
          <Button asChild size="lg" variant="hero">
            <Link to="/employers">Hire Talent <ArrowRight className="h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outlineLight">
            <Link to="/candidates">Find a Job</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up delay-400">
          {[
            { icon: Shield, label: "Confidential Recruitment" },
            { icon: Globe, label: "Global Talent Network" },
            { icon: Users, label: "Specialist Recruiters" },
            { icon: BadgeCheck, label: "Ethical Hiring" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2.5 text-sm text-primary-foreground/90">
              <t.icon className="h-5 w-5 text-accent shrink-0" />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
