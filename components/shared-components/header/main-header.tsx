import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"

import DropDownSelector from "@/components/shared-components/input-fields/drop-down-selector";

const MainHeader: NextPage = ():JSX.Element => {

    return (
        <Box
            width='100%'
            margin='auto'
            d='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Box
                d='flex'
                alignItems='center'
            >
                <Text>Icon</Text>
                <Text
                    color='#66B8EC'
                    marginLeft='15px'
                    fontSize='32px'
                    fontFamily='Rum Raisin'
                >
                    Toyken
                </Text>
            </Box>
            <DropDownSelector />
        </Box>
    )

}

export default MainHeader