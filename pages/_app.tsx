import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
