import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const team = [
  { name: "Michael Grant", role: "Managing Director", bio: "15+ years in global recruitment and executive hiring.", initials: "MG" },
  { name: "Olivia Bennett", role: "Head of Talent Solutions", bio: "Specialist in employer partnerships and workforce strategy.", initials: "OB" },
  { name: "Samuel Adeyemi", role: "Senior Recruitment Consultant", bio: "Expert in candidate sourcing and placement success.", initials: "SA" },
  { name: "Laura Chen", role: "Client & Candidate Success Manager", bio: "Ensures seamless recruitment experiences across markets.", initials: "LC" },
];

const Team = () => (
  <Layout>
    <PageHeader eyebrow="Our Team" title="Senior recruiters who know your sector" subtitle="Meet the leadership team driving precision recruitment outcomes for our clients and candidates." />
    <section className="section-pro">
      <div className="container-pro grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div key={m.name} className="group rounded-2xl bg-card border border-border p-7 text-center hover:shadow-elegant hover:-translate-y-1 hover:border-accent/40 transition-smooth">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-hero text-primary-foreground grid place-items-center mb-5 font-display text-2xl font-semibold shadow-elegant group-hover:scale-105 transition-bounce">
              {m.initials}
            </div>
            <h3 className="font-display text-lg font-semibold text-primary">{m.name}</h3>
            <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Team;
