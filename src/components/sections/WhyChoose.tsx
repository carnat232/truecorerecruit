import { Globe, ShieldCheck, Zap, Target, SearchCheck, TrendingUp } from "lucide-react";

const items = [
  { icon: Globe, title: "Global Recruitment Expertise", desc: "Active networks across continents, industries and seniority levels." },
  { icon: ShieldCheck, title: "Confidential & Ethical Hiring", desc: "Strict confidentiality protocols on every employer and candidate engagement." },
  { icon: Zap, title: "Fast, Structured Processes", desc: "Predictable timelines and clear milestones from brief to placement." },
  { icon: Target, title: "Industry-Focused Recruiters", desc: "Sector specialists who understand technical and cultural requirements." },
  { icon: SearchCheck, title: "High-Quality Talent Screening", desc: "Multi-stage screening, reference verification and capability validation." },
  { icon: TrendingUp, title: "Long-Term Placement Success", desc: "We optimize for retention — not just hires that close quickly." },
];

export const WhyChoose = () => (
  <section className="section-pro">
    <div className="container-pro">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="eyebrow mb-4">Why TrueCoreRecruit</p>
        <h2 className="heading-lg mb-5">Built for hiring outcomes that <span className="text-gradient-gold">last</span></h2>
        <p className="text-muted-foreground text-lg">A precise, people-first recruitment partner trusted by employers and professionals worldwide.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-elegant transition-smooth hover:-translate-y-1"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-5 group-hover:bg-gradient-gold group-hover:text-accent-foreground transition-smooth">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2 text-primary">{it.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
