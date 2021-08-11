import "tailwindcss/tailwind.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
};

export default App;
