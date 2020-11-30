import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
