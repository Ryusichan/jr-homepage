import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
// import { useWindowDimensions } from "../@hooks/useWindowDimensions";

export default function Document() {
  // const { width, height } = useWindowDimensions();

  // useEffect(() => {
  //   const vh = height * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }, [width, height]);

  return (
    <Html>
      <Head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
