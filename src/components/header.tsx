import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header: VFC = () => {
  return (
    <header>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="p-4 inline-block">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
