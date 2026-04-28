import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Upload, FileCheck2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Full name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone required").max(30),
});

const allowed = [".pdf", ".docx"];

const UploadCV = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [file, setFile] = useState<File | null>(null);
  const [agreements, setAgreements] = useState({ nda: false, privacy: false, terms: false });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const allAgreed = agreements.nda && agreements.privacy && agreements.terms;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    const errs: Record<string, string> = {};
    if (!r.success) r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
    if (!file) errs.file = "CV file is required";
    else {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      if (!allowed.includes(ext)) errs.file = "Only .pdf or .docx files accepted";
      if (file.size > 10 * 1024 * 1024) errs.file = "File must be under 10MB";
    }
    if (!allAgreed) errs.agreements = "You must accept all agreements to submit";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    toast({ title: "CV submitted", description: "Your CV has been successfully submitted. We'll contact you if your profile matches available opportunities." });
    setForm({ name: "", email: "", phone: "" });
    setFile(null);
    setAgreements({ nda: false, privacy: false, terms: false });
  };

  return (
    <Layout>
      <PageHeader eyebrow="Candidate Portal" title="Upload your CV" subtitle="Submit your CV confidentially. We'll evaluate your profile and reach out about matching opportunities." />
      <section className="section-pro">
        <div className="container-pro max-w-3xl">
          <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label>Application Type</Label>
                <Input value="Job Seeker" disabled className="mt-1.5 bg-muted" />
              </div>
            </div>

            <div>
              <Label>Upload CV * <span className="text-muted-foreground font-normal">(.pdf or .docx, max 10MB)</span></Label>
              <label className="mt-1.5 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border rounded-xl p-8 cursor-pointer hover:border-accent hover:bg-muted/30 transition-smooth">
                <input type="file" accept=".pdf,.docx" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                {file ? (
                  <>
                    <FileCheck2 className="h-10 w-10 text-accent" />
                    <p className="text-sm font-medium text-primary">{file.name}</p>
                    <p className="text-xs text-muted-foreground">Click to change</p>
                  </>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium">Click to upload your CV</p>
                    <p className="text-xs text-muted-foreground">PDF or DOCX format</p>
                  </>
                )}
              </label>
              {errors.file && <p className="text-destructive text-xs mt-1">{errors.file}</p>}
            </div>

            <div className="space-y-3 bg-muted/40 rounded-xl p-5 border border-border">
              <p className="text-sm font-semibold text-primary">Required Agreements</p>
              {[
                { key: "nda", label: <>I agree to the <Link to="/legal/nda" className="text-accent underline">Candidate NDA / Confidentiality Agreement</Link></> },
                { key: "privacy", label: <>I agree to the <Link to="/legal/privacy" className="text-accent underline">Privacy Policy</Link></> },
                { key: "terms", label: <>I agree to the <Link to="/legal/terms" className="text-accent underline">Terms of Service</Link></> },
              ].map((a) => (
                <label key={a.key} className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={agreements[a.key as keyof typeof agreements]}
                    onCheckedChange={(v) => setAgreements({ ...agreements, [a.key]: !!v })}
                    className="mt-0.5"
                  />
                  <span className="text-sm text-foreground/85 leading-relaxed">{a.label}</span>
                </label>
              ))}
              {errors.agreements && <p className="text-destructive text-xs">{errors.agreements}</p>}
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={!allAgreed} className="w-full">
              Submit CV
            </Button>
            {!allAgreed && (
              <p className="text-xs text-center text-muted-foreground">All agreements must be accepted before submission.</p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default UploadCV;
