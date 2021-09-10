import { ProductProjection } from "@commercetools/platform-sdk";
import { NextPage } from "next";
import { getChildDonatedHistory } from "packages/Commercetools/Items/getItemInventory";
import { getMe } from "packages/Commercetools/Users/getUser";
import { Me } from "packages/Commercetools/Users/Me";
import React from "react";
import { useEffect } from "react";

import DonateItemList from "./donate-item-list";
import ColourSection from "@/components/shared-components/sections/colour-section";
import TitleField from "@/components/shared-components/text-fields/title-field";
import { Box } from "@chakra-ui/react";

interface Props {
    items: any;
}

//WIP
const DonateHistorySection: NextPage<Props> = ({ items }): JSX.Element => {
  const [me, setMe] = React.useState<Me | null>(null);
  const [history, setHistory] = React.useState<ProductProjection[]>([]);

  const doneItems = items.filter((item: any) => item.done === 'true')
  const readyForActionItems = items.filter((item: any) => item.done === 'false')

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
    <ColourSection 
        bgColour='#66B8EC'
        thumbColor='#ACD9F0'
        trackColor='#5091BA'
    >
        <Box
            marginBottom='60px'
        >
            <TitleField
                color='#FFFFFF'
                fontSize='34px'
                start
            >
                The following items have actions
            </TitleField>
            <DonateItemList items={readyForActionItems} />
        </Box>

        <Box>
            <TitleField
                color='#FFFFFF'
                fontSize='34px'
                start
            >
                Previous items
            </TitleField>
            <DonateItemList items={doneItems} />
        </Box>
    </ColourSection>
  )
};

export default DonateHistorySection;
