import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";
import { About } from "src/pages/about";

const AboutPage: CustomNextPage = () => <About />;

AboutPage.getLayout = FixedLayout;

export default AboutPage;
