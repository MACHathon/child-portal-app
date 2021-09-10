import ColourSection from "@/components/shared-components/sections/colour-section";
import { ProductProjection } from "@commercetools/platform-sdk";
import { NextPage } from "next";
import { getChildDonatedHistory } from "packages/Commercetools/Items/getItemInventory";
import { getMe } from "packages/Commercetools/Users/getUser";
import { Me } from "packages/Commercetools/Users/Me";
import React from "react";
import { useEffect } from "react";

const DonateHistorySection: NextPage = (): JSX.Element => {
  const [me, setMe] = React.useState<Me | null>(null);
  const [history, setHistory] = React.useState<ProductProjection[]>([]);

  useEffect(() => {
    (async () => {
      let me = await getMe();
      setMe(me);
      console.log(me);
      let toysDonated = await getChildDonatedHistory(me?.id as string);

      console.log(toysDonated.body.results);
      setHistory(toysDonated.body.results);
    })();
  }, []);

  return (
    <ColourSection bgColour="#66B8EC" thumbColor="#ACD9F0" trackColor="#5091BA">
      <p>History</p>
    </ColourSection>
  );
};

export default DonateHistorySection;
