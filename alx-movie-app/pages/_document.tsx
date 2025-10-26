import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Icons for different devices */}
        <link rel="icon" href="/icons/android-chrome-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
