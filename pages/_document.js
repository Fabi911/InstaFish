import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <body>
        <div className="background"></div>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
