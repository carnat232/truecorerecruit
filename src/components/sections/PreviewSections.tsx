import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Briefcase, UserCheck, Quote, HelpCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { team } from "@/data/team";

/* ============ ABOUT PREVIEW ============ */
export const AboutPreview = () => (
  <section className="section-pro">
    <div className="container-pro max-w-4xl text-center">
      <p className="eyebrow mb-4 justify-center">About Us</p>
      <h2 className="heading-lg mb-6">People-first. <span className="text-gradient-gold">Outcomes-driven.</span></h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
        TrueCoreRecruit blends deep industry expertise with structured, ethical recruitment — delivering
        precise matches and long-term placement success for employers and candidates alike.
      </p>
      <ul className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
        {[
          "Industry expertise across global sectors",
          "Structured, transparent recruitment processes",
          "A people-first, ethics-first mindset",
        ].map((p) => (
          <li key={p} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="text-foreground/85 text-sm">{p}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="navy">
        <Link to="/about">Learn More <ArrowRight className="h-4 w-4" /></Link>
      </Button>
    </div>
  </section>
);

/* ============ EMPLOYERS PREVIEW ============ */
export const EmployersPreview = () => (
  <section className="section-pro bg-muted/40">
    <div className="container-pro max-w-5xl">
      <div className="text-center mb-12">
        <p className="eyebrow mb-4 justify-center">For Employers</p>
        <h2 className="heading-lg mb-5">Hire with precision. Hire with confidence.</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Industry-specialist recruiters, structured processes and a global reach — built around your hiring goals.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {["Permanent Recruitment", "Executive Search", "Contract Staffing", "International Hiring"].map((s) => (
          <div key={s} className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border">
            <Briefcase className="h-5 w-5 text-accent shrink-0" />
            <span className="text-sm font-medium">{s}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button asChild variant="navy">
          <Link to="/employers">View Employer Services <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ CANDIDATES PREVIEW ============ */
export const CandidatesPreview = () => (
  <section className="section-pro">
    <div className="container-pro max-w-5xl">
      <div className="text-center mb-12">
        <p className="eyebrow mb-4 justify-center">For Candidates</p>
        <h2 className="heading-lg mb-5">Build the career you actually <span className="text-gradient-gold">want</span>.</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Confidential job search, expert support and direct access to global employers — at no cost to you.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {["Job Matching", "CV Optimization", "Interview Coaching", "Career Guidance"].map((s) => (
          <div key={s} className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border">
            <UserCheck className="h-5 w-5 text-accent shrink-0" />
            <span className="text-sm font-medium">{s}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild variant="navy">
          <Link to="/candidates">View Candidate Services <ArrowRight className="h-4 w-4" /></Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/upload-cv">Upload CV</Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ PROCESS PREVIEW ============ */
export const ProcessPreview = () => {
  const steps = [
    { n: "01", t: "Consultation", d: "Deep brief on the role, team and success criteria." },
    { n: "02", t: "Sourcing", d: "Targeted outreach across our global talent network." },
    { n: "03", t: "Screening", d: "Structured interviews and capability validation." },
    { n: "04", t: "Placement", d: "Offer support and post-placement follow-up." },
  ];
  return (
    <section className="section-pro bg-muted/40">
      <div className="container-pro">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4 justify-center">Our Process</p>
          <h2 className="heading-lg mb-5">A structured path to better hires</h2>
          <p className="text-muted-foreground text-lg">Clear milestones, predictable timelines, measurable outcomes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s) => (
            <div key={s.n} className="p-7 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-soft transition-smooth">
              <div className="font-display text-3xl font-bold text-accent mb-3">{s.n}</div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="navy">
            <Link to="/process">View Full Process <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ TEAM PREVIEW ============ */
export const TeamPreview = () => {
  const preview = team.slice(0, 4);
  return (
    <section className="section-pro">
      <div className="container-pro">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4 justify-center">Our Team</p>
          <h2 className="heading-lg mb-5">Senior recruiters who know your sector</h2>
          <p className="text-muted-foreground text-lg">A senior team of consultants delivering trusted recruitment outcomes worldwide.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 mb-12 justify-items-center">
          {preview.map((m) => (
            <article
              key={m.name}
              className="w-full max-w-[320px] bg-card border border-border rounded-2xl shadow-soft hover:shadow-card transition-smooth flex flex-col p-5"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-muted mb-4">
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center px-1">
                <h3 className="font-display text-base font-semibold text-primary">{m.name}</h3>
                <p className="text-accent text-sm font-medium">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="navy">
            <Link to="/team">Meet the Full Team <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ FAQ PREVIEW ============ */
export const FAQPreview = () => {
  const faqs = [
    { q: "What industries do you recruit for?", a: "Technology, finance, healthcare, engineering, professional services and executive leadership — globally." },
    { q: "Is my CV kept confidential?", a: "Yes. Your CV is shared with employers only after your explicit authorization." },
    { q: "Are services free for candidates?", a: "Yes. All recruitment services are free for candidates — our fees are paid by employers." },
    { q: "Do you recruit internationally?", a: "Yes. We operate a global talent network with full cross-border compliance support." },
  ];
  return (
    <section className="section-pro bg-muted/40">
      <div className="container-pro max-w-4xl">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4 justify-center">FAQ</p>
          <h2 className="heading-lg mb-5">Frequently asked questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <h3 className="font-display text-base font-semibold text-primary">{f.q}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-8">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="navy">
            <Link to="/faq">View All FAQs <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ============ CONTACT PREVIEW ============ */
export const ContactPreview = () => (
  <section className="section-pro">
    <div className="container-pro">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow mb-4 justify-center">Contact</p>
        <h2 className="heading-lg mb-5">Speak with a recruitment specialist</h2>
        <p className="text-muted-foreground text-lg">Whether you're hiring or job-hunting, we typically respond within one business day.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
        {[
          { icon: Mail, label: "Email", value: "contact@truecorerecruit.com" },
          { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
          { icon: MapPin, label: "Reach", value: "Global · Remote-First" },
        ].map((c) => (
          <div key={c.label} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-accent/40 hover:shadow-soft transition-smooth">
            <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-gold grid place-items-center shadow-gold mb-4">
              <c.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <p className="font-semibold text-primary mb-1">{c.label}</p>
            <p className="text-sm text-muted-foreground">{c.value}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button asChild size="lg" variant="navy">
          <Link to="/contact">Get in Touch <ArrowRight className="h-5 w-5" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ============ TESTIMONIALS PREVIEW ============ */
export const TestimonialsPreview = () => {
  const items = [
    { quote: "TrueCoreRecruit delivered high-quality candidates efficiently. A truly professional recruitment partner.", author: "Director of Talent", role: "Global FinTech Employer" },
    { quote: "They helped me secure the right role with excellent support and complete confidentiality throughout.", author: "Senior Engineering Lead", role: "Placed Candidate" },
  ];
  return (
    <section className="section-pro bg-primary text-primary-foreground">
      <div className="container-pro">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow text-accent-glow mb-4 justify-center">Testimonials</p>
          <h2 className="heading-lg">Trusted by employers and professionals</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <div key={t.author} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/40 transition-smooth">
              <Quote className="h-9 w-9 text-accent mb-5" />
              <p className="text-lg leading-relaxed mb-6 text-primary-foreground/95">"{t.quote}"</p>
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
};
