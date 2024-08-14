import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import styled from "styled-components";

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
