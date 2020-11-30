import { Layout } from "src/components/layout";

const Home = () => {
  return (
    <Layout>
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
