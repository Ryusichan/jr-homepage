import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import ThemeConfig from "../theme";
// import GlobalStyles from "../theme/globalStyles";
import Footer from "../components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import Head from "next/head";

// import aos styles
// import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    //모든 문서에 들어가는 components
    <ThemeConfig>
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
