import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import ThemeConfig from "../theme";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeConfig>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageTransition />
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeConfig>
  );
}

export default MyApp;
