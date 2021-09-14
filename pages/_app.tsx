import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/globals.css";
import MainLayout from "@/components/shared-components/layouts/main-layout";
import NotificationProvider from "context/notification-context/notification";

import { Fonts } from "../packages/Fonts";
import CountryProvider from "context/country-context/country-context";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CountryProvider>
        <NotificationProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </NotificationProvider>
      </CountryProvider>
    </ChakraProvider>
  );
}
export default MyApp;
