import type { VFC } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Root" },
  { href: "/about", label: "About" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="text-red-500">
              <a className="inline-block p-4">{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
