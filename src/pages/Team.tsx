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
      <div className="container-pro">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7 justify-items-center">
          {team.map((m) => (
            <article
              key={m.name}
              className="w-full max-w-[320px] bg-card border border-border rounded-2xl shadow-soft hover:shadow-card transition-smooth flex flex-col p-5"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-muted mb-5">
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center flex-1 flex flex-col px-1">
                <h3 className="font-display text-base font-semibold text-primary">{m.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
