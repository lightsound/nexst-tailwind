import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
