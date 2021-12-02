import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Index</h2>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

Index.getLayout = FluidLayout;

// eslint-disable-next-line import/no-default-export
export default Index;
