import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Clock, Search, Globe2, BarChart3, Users } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Permanent Recruitment", desc: "Full-time placements across all seniority levels with retention-focused matching." },
  { icon: Clock, title: "Contract & Temporary Staffing", desc: "Agile workforce solutions for projects, transformations and seasonal demand." },
  { icon: Search, title: "Executive Search & Headhunting", desc: "Discreet, targeted search for senior leadership and board-level appointments." },
  { icon: Globe2, title: "Remote & International Hiring", desc: "Cross-border talent acquisition with compliance and onboarding support." },
  { icon: BarChart3, title: "Talent Market Insights", desc: "Salary benchmarks, talent availability and competitor intelligence." },
  { icon: Users, title: "Workforce Planning Support", desc: "Strategic advisory on org design, capability gaps and hiring roadmaps." },
];

const Employers = () => (
  <Layout>
    <PageHeader eyebrow="For Employers" title="Hire with precision. Hire with confidence." subtitle="Industry-specialist recruiters, structured processes and global reach — built around your hiring goals." />
    <section className="section-pro">
      <div className="container-pro">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-elegant transition-smooth hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-5 shadow-gold">
                <s.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="navy">
            <Link to="/contact">Request Talent <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Employers;
