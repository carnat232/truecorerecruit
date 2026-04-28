import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("tcr-cookie-consent")) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (val: string) => {
    localStorage.setItem("tcr-cookie-consent", val);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-[60] animate-fade-up">
      <div className="bg-card border border-border shadow-elegant rounded-2xl p-6">
        <h3 className="font-display text-lg font-semibold text-primary mb-2">We value your privacy</h3>
        <p className="text-sm text-muted-foreground mb-4">
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <Link to="/legal/cookies" className="text-accent underline">Cookie Policy</Link>.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="hero" onClick={() => accept("all")}>Accept</Button>
          <Button size="sm" variant="outline" onClick={() => accept("essential")}>Manage Preferences</Button>
        </div>
      </div>
    </div>
  );
};
