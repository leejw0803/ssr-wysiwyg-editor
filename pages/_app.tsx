import "../styles/globals.css";
import "react-quill/dist/quill.bubble.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
