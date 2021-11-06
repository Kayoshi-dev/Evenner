import { SSRProvider } from "@react-aria/ssr";
import Layout from "../components/layout";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";

import "../styles/scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
