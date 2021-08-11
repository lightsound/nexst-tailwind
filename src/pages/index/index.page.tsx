import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <div>Index</div>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
