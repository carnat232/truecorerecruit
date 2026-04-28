import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What industries do you recruit for?", a: "We recruit across technology, finance, healthcare, engineering, professional services and executive leadership — globally." },
  { q: "Is my CV kept confidential?", a: "Yes. Your CV is treated as strictly confidential and only shared with employers after your explicit authorization." },
  { q: "Do you recruit internationally?", a: "Yes. TrueCoreRecruit operates a global talent network and supports cross-border hiring with full compliance support." },
  { q: "How long does recruitment take?", a: "Typical timelines range from 2–6 weeks for permanent roles, depending on seniority, sector and search complexity." },
  { q: "Are services free for candidates?", a: "Yes. All recruitment services are free for candidates — our fees are paid by employers." },
  { q: "How do employers get started?", a: "Visit our Employers page or Contact form to request a discovery call with one of our specialist consultants." },
  { q: "Do you offer remote hiring?", a: "Yes. We support fully remote and hybrid hiring across multiple jurisdictions." },
  { q: "How are candidates screened?", a: "We combine structured interviews, capability validation, reference checks and culture-fit assessment for every shortlist." },
  { q: "Can I apply for multiple roles?", a: "Absolutely. Submit your CV once and we'll match your profile to relevant active mandates." },
  { q: "How can I contact a recruiter?", a: "Use the Contact page or email contact@truecorerecruit.com — we typically respond within one business day." },
];

const FAQ = () => (
  <Layout>
    <PageHeader eyebrow="FAQ" title="Frequently asked questions" subtitle="Answers to the most common questions from employers and candidates." />
    <section className="section-pro">
      <div className="container-pro max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 hover:border-accent/40 transition-smooth">
              <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-primary hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
