import { ReactNode, useContext } from "react";
import { NextPage } from "next";
import { Box } from "@chakra-ui/react";

import MainHeader from "@/components/shared-components/header/main-header";
import NotificationMessage from "../notification-message/notification-message";
import { Notification } from "../../../context/notification-context/notification";

interface Props {
  children: ReactNode;
}

const MainLayout: NextPage<Props> = ({ children }): JSX.Element => {
  const { activeNotification } = useContext(Notification);

  return (
    <Box
      width="100%"
      height="100%"
      minHeight="100vh"
      bg="#FFF9E4"
      padding="3% 10%"
    >
      <MainHeader />
      <NotificationMessage
        message={activeNotification.message}
        type={activeNotification.type}
      />
      {children}
    </Box>
  );
};

export default MainLayout;
