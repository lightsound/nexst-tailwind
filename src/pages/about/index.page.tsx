import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";

const About: CustomNextPage = () => {
  return <div>About</div>;
};

About.getLayout = FixedLayout;

export default About;
