import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Industry expertise across global sectors",
  "Structured, transparent recruitment processes",
  "A people-first, ethics-first mindset",
  "Confidential, discreet engagement at every stage",
];

const About = () => (
  <Layout>
    <PageHeader eyebrow="About Us" title="A recruitment partner built on precision and trust" subtitle="TrueCoreRecruit is committed to delivering exceptional hiring outcomes for employers and meaningful career opportunities for professionals." />
    <section className="section-pro">
      <div className="container-pro max-w-4xl">
        <p className="eyebrow mb-4">Our Approach</p>
        <h2 className="heading-lg mb-6">People-first. <span className="text-gradient-gold">Outcomes-driven.</span></h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          We combine deep industry expertise with a structured, ethical recruitment methodology. The result: precise matches, confidential engagements and long-term placement success — for employers and candidates alike.
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground/85">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default About;
