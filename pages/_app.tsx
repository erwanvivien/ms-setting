import "../styles/globals.css";
import type { AppProps } from "next/app";

import MS_SETTINGS from "../src/ms-settings";

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.query &&
    typeof router.query["setting"] === "string" &&
    MS_SETTINGS.includes(router.query["setting"])
  ) {
    console.log(router.query["setting"]);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
