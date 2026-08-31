import Link from "next/link";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-foreground-subtle sm:flex-row sm:items-center">
        <div>
          <p className="font-display font-medium text-foreground-muted">Wonho Seo</p>
          <p className="mt-1">Frontend / Hybrid Client Engineer</p>
        </div>
        <nav aria-label="하단 메뉴" className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} Wonho Seo</p>
      </div>
    </footer>
  );
}
