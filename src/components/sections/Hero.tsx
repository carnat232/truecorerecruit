import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, BadgeCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpeg";

export const Hero = () => (
  <section className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center pointer-events-none"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-hidden
    />
    {/* Dark overlay for legibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90 pointer-events-none" />

    {/* Decorative gold glow accents */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, hsl(38 55% 55% / 0.35), transparent 55%), radial-gradient(circle at 85% 80%, hsl(38 55% 55% / 0.25), transparent 55%)",
      }}
    />

    <div className="container-pro relative py-28 md:py-36 lg:py-44 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-glow text-xs font-semibold tracking-[0.18em] uppercase mb-8 animate-fade-in">
        <Sparkles className="h-3.5 w-3.5" />
        Worldwide Talent. Local Expertise.
      </div>

      <h1 className="heading-xl mb-7 animate-fade-up delay-100 max-w-5xl mx-auto">
        Connecting Talent and Opportunity{" "}
        <span className="text-gradient-gold">Across Borders</span>
      </h1>

      <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-6 animate-fade-up delay-200 leading-relaxed">
        TrueCoreRecruit is a global recruitment partner pairing ambitious organisations with
        outstanding professionals in every corner of the world. We turn international hiring into
        a seamless, strategic advantage.
      </p>
      <p className="text-base text-primary-foreground/65 max-w-2xl mx-auto mb-12 animate-fade-up delay-200 leading-relaxed">
        Backed by senior consultants and a worldwide network, we deliver confidential, ethical and
        results-driven recruitment — from executive search to specialist hiring.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-up delay-300">
        <Button asChild size="lg" variant="hero">
          <Link to="/employers">
            Hire Talent <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outlineLight">
          <Link to="/candidates">Find a Job</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-up delay-400 pt-12 border-t border-primary-foreground/10">
        {[
          { icon: Globe, label: "Global Reach", sub: "Talent across 40+ countries" },
          { icon: Users, label: "Specialist Recruiters", sub: "Senior, sector-focused experts" },
          { icon: Shield, label: "Confidential Process", sub: "100% discretion guaranteed" },
          { icon: BadgeCheck, label: "Ethical Hiring", sub: "Transparent and fair, always" },
        ].map((t) => (
          <div
            key={t.label}
            className="flex flex-col items-center gap-2 text-center px-2"
          >
            <div className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 grid place-items-center">
              <t.icon className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm font-semibold text-primary-foreground/95">{t.label}</span>
            <span className="text-xs text-primary-foreground/55 leading-snug">{t.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
