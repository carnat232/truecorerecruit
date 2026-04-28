import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DualCTA = () => (
  <section className="section-pro bg-muted/40">
    <div className="container-pro grid md:grid-cols-2 gap-8">
      {[
        { title: "For Employers", icon: Briefcase, desc: "Access pre-vetted, industry-specialist talent through structured recruitment workflows tailored to your hiring goals.", cta: "Request Talent", to: "/employers" },
        { title: "For Candidates", icon: UserCheck, desc: "Confidential job matching, CV optimization and interview support across global markets — at no cost to you.", cta: "Upload Your CV", to: "/upload-cv" },
      ].map((c) => (
        <div key={c.title} className="bg-card border border-border rounded-2xl shadow-soft hover:shadow-card transition-smooth p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
              <c.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="heading-md">{c.title}</h3>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">{c.desc}</p>
          <Button asChild variant="navy">
            <Link to={c.to}>{c.cta} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      ))}
    </div>
  </section>
);
