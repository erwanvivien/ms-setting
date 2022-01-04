import React from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

import MS_SETTINGS from "../src/ms-settings";

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    const query = router.query;

    if (!query || Object.keys(query).length === 0) return;

    router.push(
      { pathname: "#" },
      {},
      {
        shallow: true,
      }
    );

    if (typeof query["setting"] !== "string") return;

    const setting = decodeURI(query["setting"]);
    if (!MS_SETTINGS.includes(setting)) return;

    window.location.href = setting;
  }, [router, router.query]);

  return <Component {...pageProps} />;
}

export default MyApp;
