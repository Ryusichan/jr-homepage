import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //모든 문서에 들어가는 components
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
