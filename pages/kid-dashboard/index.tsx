import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getData } from "utils/getData";
import { Card } from "types/card-type";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import DashboardCard from "@/components/dashboard/kid-dashboard/dashboard-card/dashboard-card";
import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";
import { useEffect, useRef, useState } from "react";
import { getMe } from "packages/Commercetools/Users/getUser";
import {
  TypeChildDashboard,
  TypeChildDashboardFields,
} from "types/TypeChildDashboard";
import { useContentfulData } from "@/components/hooks/useContentfulData";

interface Props {
  cards: Card[];
}

const KidDashboard: NextPage<Props> = () => {
  useEffect(() => {
    (async () => {
      var me = await getMe();

      console.log("me");
      console.log(me);
    })();
  }, []);

  const router = useRouter();

  const [data, isloading] = useContentfulData<TypeChildDashboard>(
    "4Y6odArfh6UqlTsBMfh9Ir"
  );

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (!isloading && data != null) {
      setCards(GetCardLocalisedData(data?.fields));
    }
  }, [data, isloading]);

  const onRedirectHandler = async () => {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/logout`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // Deleeting cookies... never easy
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    if (rawResponse.status == 200) {
      window.location.href = "/";
    }
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Retailer Portal - Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        d="flex"
        justifyContent="space-between"
        mt="2"
        alignItems="center"
        width="100%"
        margin="auto"
        flexWrap="wrap"
        paddingBottom="3%"
      >
        {cards.map((card) => (
          <DashboardCard key={card.id} card={card} />
        ))}
      </Box>
      <Button
        height="72px"
        backgroundColor="#ff7b7b"
        textColor="#FFF"
        onClick={onRedirectHandler}
        paddingLeft="30"
        paddingRight="30"
      >
        {data?.fields?.logoutLabel}
      </Button>
    </DashboardLayout>
  );
};

export default KidDashboard;

// export const getStaticProps = async () => {
//   const data = await getData("card-test-data.json");

//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//       },
//     };
//   }

//   return {
//     props: { cards: data.cards },
//   };
// };

const GetCardLocalisedData = (fields: TypeChildDashboardFields): Card[] => {
  return !!fields
    ? [
        {
          id: "1",
          card: "donate-items",
          image: "../../icons/teddy-bear.svg",
          title: fields.donateItemsLabel,
          context: fields.donateItemsDescription,
          colour: "#ACD9F0",
          secondColour: "#66B8EC",
        },
        {
          id: "2",
          card: "spend-toykens",
          image: "../../icons/toyken-stack.png",
          title: fields.spendToykensLabel,
          context: fields.spendMyToykensDescription,
          colour: "#F6D396",
          secondColour: "#F6C165",
        },
        {
          id: "3",
          card: "choose-rewards",
          image: "../../icons/gift.svg",
          title: fields.chooseRewardLabel,
          context: fields.chooseRewardsDescription,
          colour: "#EAD0DA",
          secondColour: "#EA6699",
        },
        {
          id: "4",
          card: "toyken-trails",
          image: "../../icons/signpost.svg",
          title: fields.trailsLabel,
          context: fields.trailsDescription,
          colour: "#FDD7AF",
          secondColour: "#FD8300",
        },
      ]
    : [];
};
