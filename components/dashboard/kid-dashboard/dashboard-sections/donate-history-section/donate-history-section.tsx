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


const DonateHistorySection: NextPage<Props> = ({ items }): JSX.Element => {
  

  const doneItems = items.filter((item: any) => item.done === true)
  const readyForActionItems = items.filter((item: any) => item.done === false && item.matched == true)
  const readyForMatchItems = items.filter((item: any) => item.done === false && item.matched == false)

  console.log(readyForMatchItems);
console.log(readyForActionItems);

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
                fontSize='24px'
                start
            >
                The following items are awaiting a match - thank you for donating them!
            </TitleField>
            <DonateItemList items={readyForMatchItems} />
        </Box>

        <Box
            marginBottom='60px'
        >
            <TitleField
                color='#FFFFFF'
                fontSize='24px'
                start
            >
                The following items have actions
            </TitleField>
            <DonateItemList items={readyForActionItems} />
        </Box>

        <Box>
            <TitleField
                color='#FFFFFF'
                fontSize='24px'
                start
            >
                Donation history
            </TitleField>
            <DonateItemList items={doneItems} />
        </Box>
    </ColourSection>
  )
};

export default DonateHistorySection;
