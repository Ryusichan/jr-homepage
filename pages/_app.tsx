import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import ThemeConfig from "../theme";
import Footer from "../components/Footer";
import AOS from "aos";
import Head from "next/head";
import LoadingContainer from "../components/LoadingContainer";
import axios from "axios";

// import aos styles
// import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    axios.get("").then((res: any) => {
      setLoading(false);
    });
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
