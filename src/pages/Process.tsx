import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const employer = [
  { t: "Role Consultation", d: "Deep brief on the role, team and success criteria." },
  { t: "Talent Sourcing", d: "Targeted outreach across our global network and active databases." },
  { t: "Candidate Screening", d: "Structured interviews, capability validation and culture fit." },
  { t: "Shortlisting", d: "A curated, ranked shortlist with full submission notes." },
  { t: "Interviews & Feedback", d: "We coordinate scheduling, debriefs and continuous calibration." },
  { t: "Placement & Follow-Up", d: "Offer support and post-placement check-ins to ensure retention." },
];

const candidate = [
  { t: "CV Submission", d: "Securely submit your CV through our confidential portal." },
  { t: "Profile Evaluation", d: "A consultant reviews your background, goals and salary expectations." },
  { t: "Job Matching", d: "We present curated roles aligned to your career ambitions." },
  { t: "Interview Preparation", d: "Coaching, employer briefings and success frameworks." },
  { t: "Offer Support", d: "Negotiation guidance to secure the right outcome." },
  { t: "Placement & Career Support", d: "Long-term partnership — even after you’ve started the role." },
];

const Step = ({ items, color }: { items: { t: string; d: string }[]; color: "navy" | "gold" }) => (
  <ol className="space-y-5">
    {items.map((s, i) => (
      <li key={s.t} className="flex gap-5 group">
        <div className={`shrink-0 h-12 w-12 rounded-xl grid place-items-center font-display text-lg font-semibold transition-smooth ${
          color === "gold"
            ? "bg-gradient-gold text-accent-foreground shadow-gold"
            : "bg-primary text-primary-foreground"
        }`}>
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="pt-1.5">
          <h4 className="font-display text-lg font-semibold text-primary mb-1">{s.t}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
        </div>
      </li>
    ))}
  </ol>
);

const Process = () => (
  <Layout>
    <PageHeader eyebrow="Our Process" title="A structured path to better hires and better careers" subtitle="Two parallel tracks — designed for clarity, speed and outcomes." />
    <section className="section-pro">
      <div className="container-pro grid lg:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-3">Employer Process</p>
          <h2 className="heading-md mb-7">From brief to placement in 6 steps</h2>
          <Step items={employer} color="navy" />
        </div>
        <div>
          <p className="eyebrow mb-3">Candidate Process</p>
          <h2 className="heading-md mb-7">From CV to career success</h2>
          <Step items={candidate} color="gold" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Process;
