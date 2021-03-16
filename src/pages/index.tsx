import { Layout } from "src/components/layout";

const Home = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <Layout>
      <button className="btn-blue" onClick={handleClick}>
        Button
      </button>
    </Layout>
  );
};

export default Home;
