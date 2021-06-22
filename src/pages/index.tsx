import type { NextPage } from "next";
import { Layout } from "src/components/layout";

const Home: NextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <Layout>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </Layout>
  );
};

export default Home;
