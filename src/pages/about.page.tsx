import type { CustomNextPage } from "next";
import { FixedLayout } from "src/pages/_Layout";

const About: CustomNextPage = () => {
  return <div>About</div>;
};

About.getLayout = FixedLayout;

export default About;
