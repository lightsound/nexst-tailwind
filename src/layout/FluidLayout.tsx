import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Header />
      <main className="bg-red-300">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
