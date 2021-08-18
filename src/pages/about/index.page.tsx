import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";

const About: CustomNextPage = () => {
  return <h2>About</h2>;
};

About.getLayout = FixedLayout;

export default About;
