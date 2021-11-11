import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

import "../styles/scss/main.scss";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        theme={{
          colorScheme: "light",
          fontFamily: "Quicksand",
        }}
      >
        <NotificationsProvider position='top-right' zIndex={2077}>
          <NormalizeCSS />
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
