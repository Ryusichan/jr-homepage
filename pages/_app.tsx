import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import ThemeConfig from "../theme";
// import GlobalStyles from "../theme/globalStyles";
import Footer from "../components/Footer";
import AOS from "aos";
import Router from "next/router";
import Head from "next/head";
import LoadingContainer from "../components/LoadingContainer";

// import aos styles
// import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <LoadingContainer />
  ) : (
    <ThemeConfig>
      {/* 모든 문서에 들어가는 components */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <GlobalStyles /> */}
      <Appbar />
      <Component {...pageProps} />
      {/* Footer */}
      <Footer />
    </ThemeConfig>
  );
}

export default MyApp;
