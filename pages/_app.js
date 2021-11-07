import { SSRProvider } from "@react-aria/ssr";
import { registerLocale } from "react-datepicker";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider, Button } from "@mantine/core";

import Layout from "../components/layout";

import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";

import "../styles/scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <MantineProvider theme={{ fontFamily: "Quicksand" }}>
        <NotificationsProvider position='top-right'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </SSRProvider>
  );
}

export default MyApp;
