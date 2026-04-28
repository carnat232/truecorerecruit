import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, FileText, MessageSquare, Lock, Compass, Globe2 } from "lucide-react";

const services = [
  { icon: Target, title: "Job Matching & Placement", desc: "Curated opportunities aligned to your skills, ambitions and values." },
  { icon: FileText, title: "CV Review & Optimization", desc: "Professional feedback that positions you for premium roles." },
  { icon: MessageSquare, title: "Interview Coaching", desc: "Tailored preparation for behavioral, technical and executive interviews." },
  { icon: Lock, title: "Confidential Job Search", desc: "Strict discretion — your job search remains private at every stage." },
  { icon: Compass, title: "Career Guidance", desc: "Long-term career strategy from specialist consultants who know your sector." },
  { icon: Globe2, title: "Access to Global Employers", desc: "Direct routes into trusted employers across international markets." },
];

const Candidates = () => (
  <Layout>
    <PageHeader eyebrow="For Candidates" title="Build the career you actually want" subtitle="Confidential job search, expert support and access to global employers — at no cost to you." />
    <section className="section-pro">
      <div className="container-pro">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-elegant transition-smooth hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-5">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="hero">
            <Link to="/upload-cv">Upload Your CV <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Candidates;
