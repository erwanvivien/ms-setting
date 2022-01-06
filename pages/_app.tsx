import React from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

import MS_SETTINGS from "../src/ms-settings";

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    const query = router.query;

    if (!query || Object.keys(query).length === 0) return;
    if (typeof query["redirect"] !== "string") return;

    const redirect = decodeURI(query["redirect"]);
    if (!MS_SETTINGS.includes(redirect)) return;

    window.location.href = redirect;
  }, [router, router.query]);

  return <Component {...pageProps} />;
}

export default MyApp;
