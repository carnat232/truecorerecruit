interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => (
  <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "radial-gradient(circle at 20% 30%, hsl(38 55% 55% / 0.4), transparent 60%), radial-gradient(circle at 80% 80%, hsl(38 55% 55% / 0.25), transparent 60%)",
    }} />
    <div className="container-pro relative py-24 md:py-32 text-center">
      {eyebrow && <p className="eyebrow text-accent-glow mb-4 animate-fade-up">{eyebrow}</p>}
      <h1 className="heading-xl mb-5 animate-fade-up delay-100">{title}</h1>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 animate-fade-up delay-200">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);
