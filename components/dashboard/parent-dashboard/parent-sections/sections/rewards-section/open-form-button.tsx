import { Box, Text } from "@chakra-ui/layout"
import { NextPage } from "next"

interface Props {
    onClick: () => void
    text: string
}

const OpenFormButton: NextPage<Props> = ({ onClick, text }): JSX.Element => {

    return (
        <Box
            d='flex'
            justifyContent='center'
            alignItems='center'
            height='150px'
            width='100%'
            bg='transparent'
            borderRadius='20px'
            border='5px dashed white'
            padding='25px 35px'
            marginBottom='2%'
            cursor='pointer'
            onClick={ onClick }
        >
            <Text
                fontFamily='Raleway'
                fontSize='38px'
                fontWeight='700'
                color='white'
            >
               { text }
            </Text>
        </Box>
    )
}

export default OpenFormButton