import { NextPage } from "next";
import { Box, Image, Text } from "@chakra-ui/react";

import ColourSection from "@/components/shared-components/sections/colour-section";
import { useEffect } from "react";
import { getMe } from "packages/Commercetools/Users/getUser";
import React from "react";
import { Me } from "packages/Commercetools/Users/Me";

const SpendToykensSection: NextPage = (): JSX.Element => {

    const [me, setMe] = React.useState<Me | null>(null);

    useEffect(() => {
      (async () => {
        let me = await getMe();
        setMe(me);
        console.log("me");
        console.log(me);
      })();
    }, []);


    return (
        
        <ColourSection bgColour='#F6C165'>
            <Box
                width='302px'
                height='100%'
                margin='auto'
                d='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Image src='../../icons/qr-code-teddy.png' alt='qr-code' width='302px' height='302px'/>
                <Text
                    fontFamily='Raleway'
                    fontSize='24px'
                    fontWeight='700'
                    color='#333333'
                    textAlign='center'
                    marginTop='7%'
                >
                    Ask the shop owner to scan your coder or input your child ID ({<span>#{me?.id}</span>})
                </Text>
            </Box>
        </ColourSection>
    )
}

export default SpendToykensSection