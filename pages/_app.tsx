import "../styles/globals.css";
import type { AppProps } from "next/app";

import MS_SETTINGS from "../src/ms-settings";

const MS_SETTINGS_SUBSTR = MS_SETTINGS.map((setting) => setting.substring(12));

function MyApp({ Component, pageProps, router }: AppProps) {
  if (
    router.query &&
    typeof router.query["ms-settings"] === "string" &&
    MS_SETTINGS_SUBSTR.includes(router.query["ms-settings"])
  ) {
    console.log(router.query["ms-settings"]);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
