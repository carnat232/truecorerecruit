import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
const employers = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1280&q=80";
const candidates = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1280&q=80";

export const DualCTA = () => (
  <section className="section-pro bg-muted/40">
    <div className="container-pro grid md:grid-cols-2 gap-8">
      {[
        { img: employers, title: "For Employers", icon: Briefcase, desc: "Access pre-vetted, industry-specialist talent through structured recruitment workflows.", cta: "Request Talent", to: "/employers" },
        { img: candidates, title: "For Candidates", icon: UserCheck, desc: "Confidential job matching, CV optimization and interview support across global markets.", cta: "Upload Your CV", to: "/upload-cv" },
      ].map((c) => (
        <div key={c.title} className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elegant transition-smooth bg-card">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-3 mb-3">
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
        </div>
      ))}
    </div>
  </section>
);
