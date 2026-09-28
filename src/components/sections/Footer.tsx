import { clinic, whatsappUrl } from "@/content/clinic";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-ink-soft md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {clinic.name} · {clinic.cro}
        </p>
        <p className="flex gap-2">
          <a href={clinic.instagram} target="_blank" rel="noopener" className="hover:text-ink">Instagram</a>·
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="hover:text-ink">WhatsApp</a>·
          <a href={`tel:+${clinic.whatsapp}`} className="hover:text-ink">{clinic.phoneDisplay}</a>
        </p>
      </div>
    </footer>
  );
}
