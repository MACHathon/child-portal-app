import type { NextPage } from "next";
import { Card } from "types/card-type";
import { Box, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import { AiTwotoneStar } from "react-icons/ai";
import { RiUserHeartFill } from "react-icons/ri";

import ParentLayout from "@/components/shared-components/layouts/parent-layout";
import SectionButton from "@/components/dashboard/parent-dashboard/parent-sections/section-button/section-button";
import { ParentSection } from "types/parent-section";
import { useRouter } from "next/router";

//Dummy date - ToBe removed
const parentSection: ParentSection[] = [
  {
    icon: <AiTwotoneStar />,
    bgColour: "#66B8EC",
    text: "Create Rewards for my children",
    target: "/parent-dashboard/section/create-reward",
  },
  {
    icon: <RiUserHeartFill />,
    bgColour: "#EA6699",
    text: "Manage Accounts",
    target: "/parent-dashboard/section/manage-accounts",
  }
];

interface Props {
  cards: Card[];
}

const ParentDashboard: NextPage<Props> = ({ cards }) => {
  
  const router = useRouter();

  const handleLogoutClick = async () => {
    // const rawResponse = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_HOST}/api/logout`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

     // Deleeting cookies... never easy
     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
     window.location.href = "/";

    // if (rawResponse.status == 200) {
    //   window.location.href = "/";
    // }
  };

  return (
    <ParentLayout>
      <Head>
        <title>Parent Portal - Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box d="flex" flexDirection="column" width="50%" margin="7% auto">
        {parentSection.map((section: ParentSection, index: number) => {
          return (
            <SectionButton
              key={index}
              icon={section.icon}
              bgColour={section.bgColour}
              target={() => router.push(section.target)}
            >
              {section.text}
            </SectionButton>
          );
        })}
        <Button
          bg="#f25c5c"
          color="#fff"
          alignItems="center"
          justifyContent="center"
          height="80px"
          width="100%"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          boxShadow="m"
          fontSize='24px'
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={(handleLogoutClick)}
        >
          Logout
        </Button>
      </Box>
    </ParentLayout>
  );
};

export default ParentDashboard;
