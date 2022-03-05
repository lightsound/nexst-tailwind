import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => {
  return <Index />;
};

IndexPage.getLayout = FluidLayout;

export default IndexPage;
