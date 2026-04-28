import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { team } from "@/data/team";

const Team = () => (
  <Layout>
    <PageHeader
      eyebrow="Our Team"
      title="Senior recruiters who know your sector"
      subtitle="Meet the consultants driving precision recruitment outcomes for our clients and candidates."
    />
    <section className="section-pro">
      <div className="container-pro grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {team.map((m) => (
          <article
            key={m.name}
            className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 hover:border-accent/40 transition-smooth flex flex-col"
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={m.image}
                alt={`${m.name} — ${m.role}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col">
              <h3 className="font-display text-lg font-semibold text-primary">{m.name}</h3>
              <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Team;
