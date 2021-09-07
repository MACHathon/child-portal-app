import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { ReactElement } from "react"

interface Props {
    onClick: () => void
    icon: ReactElement
    color: string
    text: string
}

const OptionButton: NextPage<Props> = ({ color, icon, text, onClick }): JSX.Element => {

    return (
        <Box
            color={ color }
            onClick={onClick}
            d='flex'
            alignItems='center'
            cursor='pointer'
            margin='0 15px'
        >
            <Box
                fontSize='30px'
                width='32px'
                height='32px'         
            >
                { icon }
            </Box>
            <Text
                fontFamily='Raleway'
                fontSize='28px'
                fontWeight='400'
                marginLeft='10px'
            >
                { text }
            </Text>
        </Box>

    )
}

export default OptionButton