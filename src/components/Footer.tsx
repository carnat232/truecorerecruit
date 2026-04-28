import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-pro py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="mb-5">
          <span className="font-display text-xl font-semibold">TrueCoreRecruit</span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 mt-1">Connecting Talent Globally</p>
        </div>
        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
          A global recruitment agency delivering confidential, precise and results-driven hiring solutions.
        </p>
      </div>

      <div>
        <h4 className="font-display text-base font-semibold mb-4 text-accent">Company</h4>
        <ul className="space-y-2.5 text-sm text-primary-foreground/75">
          <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
          <li><Link to="/team" className="hover:text-accent transition-smooth">Our Team</Link></li>
          <li><Link to="/process" className="hover:text-accent transition-smooth">Our Process</Link></li>
          <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base font-semibold mb-4 text-accent">Services</h4>
        <ul className="space-y-2.5 text-sm text-primary-foreground/75">
          <li><Link to="/employers" className="hover:text-accent transition-smooth">For Employers</Link></li>
          <li><Link to="/candidates" className="hover:text-accent transition-smooth">For Candidates</Link></li>
          <li><Link to="/upload-cv" className="hover:text-accent transition-smooth">Upload CV</Link></li>
          <li><Link to="/faq" className="hover:text-accent transition-smooth">FAQ</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base font-semibold mb-4 text-accent">Contact</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/75">
          <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-accent mt-0.5" /> contact@truecorerecruit.com</li>
          <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-accent mt-0.5" /> +1 (555) 123-4567</li>
          <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-accent mt-0.5" /> Global · Remote-First</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-pro py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} TrueCoreRecruit. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/legal/privacy" className="hover:text-accent transition-smooth">Privacy Policy</Link>
          <Link to="/legal/terms" className="hover:text-accent transition-smooth">Terms of Service</Link>
          <Link to="/legal/nda" className="hover:text-accent transition-smooth">NDA</Link>
          <Link to="/legal/cookies" className="hover:text-accent transition-smooth">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);
