import heroBg from "@/assets/hero-bg.jpeg";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => (
  <section className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center pointer-events-none"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-hidden
    />
    {/* Dark overlay for legibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/95 pointer-events-none" />
    {/* Gold glow accents */}
    <div
      className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(38 55% 55% / 0.4), transparent 60%), radial-gradient(circle at 80% 80%, hsl(38 55% 55% / 0.25), transparent 60%)",
      }}
    />
    <div className="container-pro relative py-20 md:py-28 lg:py-32 text-center">
      {eyebrow && <p className="eyebrow text-accent-glow mb-4 animate-fade-up">{eyebrow}</p>}
      <h1 className="heading-xl mb-5 animate-fade-up delay-100">{title}</h1>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-primary-foreground/85 animate-fade-up delay-200 leading-relaxed px-2">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);
