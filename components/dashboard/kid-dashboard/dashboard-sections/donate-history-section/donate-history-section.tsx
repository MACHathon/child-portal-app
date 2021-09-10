import ColourSection from "@/components/shared-components/sections/colour-section";
import { Box, Image, Text } from "@chakra-ui/react";
import { ProductProjection } from "@commercetools/platform-sdk";
import { NextPage } from "next";
import { getChildDonatedHistory } from "packages/Commercetools/Items/getItemInventory";
import { getMe } from "packages/Commercetools/Users/getUser";
import { Me } from "packages/Commercetools/Users/Me";
import React from "react";
import { useEffect } from "react";

interface Props {
    items: any;
}

//WIP
const DonateHistorySection: NextPage<Props> = ({ items }): JSX.Element => {
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
    <ColourSection 
        bgColour='#66B8EC'
        thumbColor='#ACD9F0'
        trackColor='#5091BA'
    >
    {
        items.map((item: any) => {
            return (
                <Box
                    key={ item.id }
                    d='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    height='180px'
                    width='100%'
                    bg='white'
                    borderRadius='20px'
                    padding='25px 35px 25px 0'
                    marginBottom='2%'
                    overflow='hidden'
                >
                    <Box
                        fontFamily='Raleway'
                        fontWeight='700'
                        d='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Image
                            src={item.image}
                            marginRight='30px'
                            objectFit='contain'
                            width='185px'
                            height='185px'
                        />
                        <Box>
                            <Text
                                fontSize='38px'
                                color='#333333'
                            > 
                                { item.name } 
                            </Text>
                            <Text
                                fontSize='22px'
                                color='#F6C165'
                                marginRight='10px'
                                > 
                                { item.comment } 
                            </Text>
                        </Box>
                    </Box>
                </Box>
            )
        })
    }  
    </ColourSection>
  )
};

export default DonateHistorySection;
