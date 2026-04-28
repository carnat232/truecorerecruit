import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

interface Props { eyebrow: string; title: string; body: { h?: string; p: string }[]; }

const LegalPage = ({ eyebrow, title, body }: Props) => (
  <Layout>
    <PageHeader eyebrow={eyebrow} title={title} />
    <section className="section-pro">
      <div className="container-pro max-w-3xl prose-legal">
        {body.map((b, i) => (
          <div key={i} className="mb-8">
            {b.h && <h2 className="font-display text-2xl font-semibold text-primary mb-3">{b.h}</h2>}
            <p className="text-foreground/80 leading-relaxed">{b.p}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export const NDA = () => (
  <LegalPage eyebrow="Legal" title="Candidate NDA & Confidentiality Agreement" body={[
    { p: "All candidate information submitted to TrueCoreRecruit is treated as strictly confidential. By submitting your CV, you authorize TrueCoreRecruit to store and share your information only with potential employers for recruitment purposes." },
    { p: "Your data will never be sold or disclosed to any third party without your explicit consent. Our consultants operate under formal confidentiality protocols at every stage of the recruitment process." },
    { h: "Your rights", p: "You may request a copy of your data, withdraw consent or have your information removed from our systems at any time by contacting contact@truecorerecruit.com." },
  ]} />
);

export const Privacy = () => (
  <LegalPage eyebrow="Legal" title="Privacy Policy" body={[
    { p: "TrueCoreRecruit collects and processes personal data solely for recruitment purposes. We follow strict data-protection standards to ensure security, transparency and lawful handling of all information." },
    { h: "Data we collect", p: "Contact details, CV/résumé content, professional history and any information you voluntarily provide through our forms or communications." },
    { h: "How we use it", p: "To match you to relevant opportunities, communicate with you about roles and improve our services. We do not sell personal data." },
    { h: "Data retention", p: "We retain candidate data for as long as it is relevant for recruitment, or until you request deletion." },
  ]} />
);

export const Terms = () => (
  <LegalPage eyebrow="Legal" title="Terms of Service" body={[
    { p: "By using this website, you agree to our recruitment practices and policies. TrueCoreRecruit acts as a recruitment intermediary and does not guarantee employment outcomes." },
    { h: "Use of the site", p: "You agree to provide accurate information, use the site lawfully and not interfere with its operation or security." },
    { h: "Limitation of liability", p: "TrueCoreRecruit is not liable for hiring decisions made by employers or career outcomes resulting from any introduction made through our services." },
  ]} />
);

export const Cookies = () => (
  <LegalPage eyebrow="Legal" title="Cookie Policy" body={[
    { p: "We use cookies to improve functionality, analytics and user experience. Users may manage cookie preferences through their browser settings or via the cookie banner shown on first visit." },
    { h: "Types of cookies", p: "Essential cookies enable core site functionality. Analytics cookies help us understand how visitors use the site. Preference cookies remember your settings." },
  ]} />
);
