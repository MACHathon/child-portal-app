import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import DropDownSelector from "@/components/shared-components/header/drop-down-selector";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import { TypeComponentHeader } from "types/TypeComponentHeader";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MainHeader: NextPage = (): JSX.Element => {
  const isLoggedIn: boolean = false;

  const router = useRouter();
  const { asPath } = useRouter();
  const currentPath = asPath === "/" ? false : true;

  const [data, isLoading] = useContentfulData<TypeComponentHeader>(
    "3L7ODj3p4laQiOOrWnScoZ"
  );

  return (
    <Box
      width="100%"
      margin="auto"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box d="flex" alignItems="center">
        {!isLoggedIn ? (
          <Image
            src="../../icons/toyken-logo.svg"
            alt="logo"
            width="175px"
            height="45px"
            cursor={currentPath ? "pointer" : "default"}
            onClick={currentPath ? () => router.push("/") : undefined}
          />
        ) : (
          <Box
            d="flex"
            alignItems="center"
            fontSize="26"
            fontWeight="700"
            fontFamily="Raleway"
            color="#EA6699"
            cursor="pointer"
          >
            <span>
              <FiLogOut />
            </span>
            <Text marginLeft="12px">{data.fields?.logoutLable}</Text>
          </Box>
        )}
      </Box>
      <DropDownSelector />
    </Box>
  );
};

export default MainHeader;
