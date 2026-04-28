import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  type: z.enum(["employer", "candidate"]),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "employer", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    toast({ title: "Message sent", description: "Thank you for contacting TrueCoreRecruit. Our team will respond shortly." });
    setForm({ name: "", email: "", phone: "", type: "employer", message: "" });
  };

  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Speak with a recruitment specialist" subtitle="Whether you're hiring or job-hunting, we typically respond within one business day." />
      <section className="section-pro">
        <div className="container-pro grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-8 shadow-elegant">
              <h3 className="font-display text-2xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4"><Mail className="h-5 w-5 text-accent mt-0.5" /><div><p className="font-semibold">Email</p><p className="text-primary-foreground/80">contact@truecorerecruit.com</p></div></div>
                <div className="flex items-start gap-4"><Phone className="h-5 w-5 text-accent mt-0.5" /><div><p className="font-semibold">Phone</p><p className="text-primary-foreground/80">+1 (555) 123-4567</p></div></div>
                <div className="flex items-start gap-4"><MapPin className="h-5 w-5 text-accent mt-0.5" /><div><p className="font-semibold">Reach</p><p className="text-primary-foreground/80">Global · Remote-First</p></div></div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-card space-y-5">
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
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="type">I am an *</Label>
                <select id="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="employer">Employer</option>
                  <option value="candidate">Job Seeker</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" rows={5} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5" />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" variant="navy" size="lg" className="w-full sm:w-auto">Send Message</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
