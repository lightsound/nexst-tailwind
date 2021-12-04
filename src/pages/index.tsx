import type { VFC } from "react";

export const Index: VFC = () => {
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
