import "../src/style/index.css";

import { LocaleProvider } from "@hi18n/react";
import type { CustomAppPage } from "next/app";
import Head from "next/head";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <LocaleProvider locales="ja">
      <Head>
        <title>nexst</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </LocaleProvider>
  );
};

export default App;
