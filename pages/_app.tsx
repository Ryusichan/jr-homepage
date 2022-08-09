import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //모든 문서에 들어가는 components
    <ThemeConfig>
      <GlobalStyles />
      <Appbar />
      <Component {...pageProps} />
      {/* Footer */}
      <Footer />
    </ThemeConfig>
  );
}

export default MyApp;
