import "src/styles/globals.css";

import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default App;
