import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => (
  <section className="section-pro">
    <div className="container-pro">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-accent-glow mb-4">Get Started</p>
            <h2 className="heading-lg mb-4">Ready to make your next great hire — or career move?</h2>
            <p className="text-primary-foreground/80 text-lg">Talk to a TrueCoreRecruit specialist today.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Talk to Us <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link to="/upload-cv">Upload CV</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
