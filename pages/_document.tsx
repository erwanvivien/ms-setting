import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta
            name="description"
            content="MS Settings Mimic
    Allows you to create a link to a Microsoft/Windows Setting
    Provide better help"
          />
          <meta name="author" content="Erwan, Vahan" />

          <meta
            property="og:title"
            content="MS Settings — Provide accurate help"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ms-setting.com/" />
          <meta
            property="og:description"
            content="MS Settings Mimic
    Allows you to create a link to a Microsoft/Windows Setting
    Provide better help"
          />
          <meta property="og:image" content="/icons/settings.svg" />

          <link rel="icon" href="/icons/settings.svg" />
          <link rel="icon" href="/icons/settings.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/icons/settings.svg" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;