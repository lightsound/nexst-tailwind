import Head from "next/head";
import { Layout } from "src/components/layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>About</h2>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
