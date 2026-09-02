import type { Metadata } from "next";
import { ContactStrip } from "@/components/ContactStrip";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.location}. US remote or Salt Lake hybrid. EST overlap. ${site.authorization}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="contact-page">
      <header className="page-hero">
        <h1>Contact</h1>
      </header>
      <ContactStrip />
    </article>
  );
}
