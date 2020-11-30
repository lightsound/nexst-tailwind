import Head from "next/head";
import { Layout } from "src/components/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <button
        className="btn-blue"
        onClick={() => {
          window.alert("Hello, World!");
        }}
      >
        Button
      </button>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
