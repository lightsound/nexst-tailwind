import type { DocumentProps } from "next/document";
import { Head, Html, Main, NextScript } from "next/document";
import type { VFC } from "react";

const Document: VFC<DocumentProps> = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
