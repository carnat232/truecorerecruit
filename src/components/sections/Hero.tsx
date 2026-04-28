import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Hero = () => (
  <section className="relative bg-gradient-hero text-primary-foreground">
    <div className="container-pro py-24 md:py-32 text-center">
      {/* Logo prominently at the top */}
      <div className="flex justify-center mb-10 animate-fade-in">
        <img
          src={logo}
          alt="TrueCoreRecruit"
          className="h-20 md:h-24 w-auto"
          width={240}
          height={96}
        />
      </div>

      <p className="eyebrow text-accent-glow mb-5 animate-fade-up justify-center">
        Global Recruitment Excellence
      </p>
      <h1 className="heading-xl mb-6 animate-fade-up delay-100 max-w-4xl mx-auto">
        Your Competitive Edge in <span className="text-gradient-gold">Global Recruitment</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
        TrueCoreRecruit connects trusted employers with top-tier talent worldwide through structured,
        confidential and results-driven recruitment solutions.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-up delay-300">
        <Button asChild size="lg" variant="hero">
          <Link to="/employers">Hire Talent <ArrowRight className="h-5 w-5" /></Link>
        </Button>
        <Button asChild size="lg" variant="outlineLight">
          <Link to="/candidates">Find a Job</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up delay-400 pt-10 border-t border-primary-foreground/10">
        {[
          { icon: Shield, label: "Confidential Recruitment" },
          { icon: Globe, label: "Global Talent Network" },
          { icon: Users, label: "Specialist Recruiters" },
          { icon: BadgeCheck, label: "Ethical Hiring" },
        ].map((t) => (
          <div key={t.label} className="flex items-center justify-center gap-2.5 text-sm text-primary-foreground/85">
            <t.icon className="h-5 w-5 text-accent shrink-0" />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
