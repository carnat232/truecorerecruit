import { Quote } from "lucide-react";

const items = [
  {
    quote: "TrueCoreRecruit delivered high-quality candidates efficiently. A truly professional recruitment partner.",
    author: "Director of Talent",
    role: "Global FinTech Employer",
  },
  {
    quote: "They helped me secure the right role with excellent support and complete confidentiality throughout.",
    author: "Senior Engineering Lead",
    role: "Placed Candidate",
  },
];

export const Testimonials = () => (
  <section className="section-pro bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "radial-gradient(circle at 80% 20%, hsl(38 55% 55% / 0.5), transparent 50%)",
    }} />
    <div className="container-pro relative">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow text-accent-glow mb-4">Testimonials</p>
        <h2 className="heading-lg">Trusted by employers and professionals</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t) => (
          <div key={t.author} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/40 transition-smooth">
            <Quote className="h-9 w-9 text-accent mb-5" />
            <p className="text-lg leading-relaxed mb-6 text-primary-foreground/95 font-display italic">"{t.quote}"</p>
            <div className="border-t border-primary-foreground/10 pt-4">
              <p className="font-semibold">{t.author}</p>
              <p className="text-sm text-primary-foreground/60">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
