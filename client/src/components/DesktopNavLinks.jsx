import Link from 'next/link';
import { NAV_LINKS } from "@/constants"

export function DesktopNavLinks() {
  return (
    <ul className="hidden h-full gap-12 lg:flex text-center mb-0">
      {NAV_LINKS.map((link) => (
        <li key={link.key}>
          <Link href={link.href} className="navbar-link">{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
