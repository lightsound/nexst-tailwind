import type { NextPage } from "next";
import type { AppProps } from "next/app";

type PageAttributes = { getLayout?: (page: ReactElement) => JSX.Element };

declare module "next" {
  type CustomLayout = NonNullable<PageAttributes["getLayout"]>;
  type CustomNextPage<P = Record<string, unknown>, IP = P> = NextPage<P, IP> &
    PageAttributes;
}

declare module "next/app" {
  type CustomAppPage<P = Record<string, unknown>> = (
    props: AppProps<P> & { Component: NextPage & PageAttributes }
  ) => JSX.Element;
}
