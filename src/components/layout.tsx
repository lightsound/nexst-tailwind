import type { ReactNode } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "peachpuff" }}>{props.children}</main>
      <Footer />
    </>
  );
};
