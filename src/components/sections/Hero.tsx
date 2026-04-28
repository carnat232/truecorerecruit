import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero text-primary-foreground">
    {/* Subtle decorative elements */}
    <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
      backgroundImage:
        "radial-gradient(circle at 15% 20%, hsl(38 55% 55% / 0.35), transparent 55%), radial-gradient(circle at 85% 80%, hsl(38 55% 55% / 0.22), transparent 55%)",
    }} />
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(40 33% 98% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(40 33% 98% / 0.4) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

    <div className="container-pro relative z-10 py-28 text-center">
      <p className="eyebrow text-accent-glow mb-5 animate-fade-up justify-center">Global Recruitment Excellence</p>
      <h1 className="heading-xl mb-6 animate-fade-up delay-100 max-w-5xl mx-auto">
        Your Competitive Edge in <span className="text-gradient-gold">Global Recruitment</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
        TrueCoreRecruit connects trusted employers with top-tier talent worldwide through structured,
        confidential and results-driven recruitment solutions.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-14 animate-fade-up delay-300">
        <Button asChild size="lg" variant="hero">
          <Link to="/employers">Hire Talent <ArrowRight className="h-5 w-5" /></Link>
        </Button>
        <Button asChild size="lg" variant="outlineLight">
          <Link to="/candidates">Find a Job</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up delay-400">
        {[
          { icon: Shield, label: "Confidential Recruitment" },
          { icon: Globe, label: "Global Talent Network" },
          { icon: Users, label: "Specialist Recruiters" },
          { icon: BadgeCheck, label: "Ethical Hiring" },
        ].map((t) => (
          <div key={t.label} className="flex items-center justify-center gap-2.5 text-sm text-primary-foreground/90">
            <t.icon className="h-5 w-5 text-accent shrink-0" />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
