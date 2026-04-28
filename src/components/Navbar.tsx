import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/employers", label: "Employers" },
  { to: "/candidates", label: "Candidates" },
  { to: "/process", label: "Process" },
  { to: "/team", label: "Team" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-pro flex items-center justify-between h-20">
        <Link to="/" className="flex items-center shrink-0">
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-primary">TrueCoreRecruit</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">Connecting Talent Globally</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium transition-smooth relative group ${
                pathname === l.to ? "text-accent" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {l.label}
              <span
                className={`absolute bottom-0 left-3 right-3 h-0.5 bg-accent transition-smooth ${
                  pathname === l.to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="default">
            <Link to="/upload-cv"><Upload className="h-4 w-4" /> Upload CV</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-pro py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`py-3 px-2 text-base font-medium border-b border-border/50 ${
                  pathname === l.to ? "text-accent" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-4">
              <Link to="/upload-cv"><Upload className="h-4 w-4" /> Upload CV</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
