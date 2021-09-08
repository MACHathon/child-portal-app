import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"

import SectionButton from "@/components/dashboard/parent-dashboard/parent-sections/section-button/section-button"

interface Props {
    onFormOpenHandler: () => void
    onRedirectHandler: () => void
}

const OptionSection: NextPage<Props> = ({ onFormOpenHandler, onRedirectHandler }): JSX.Element => {
    return (
        <Box
            height='100%'
            d='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Text
                fontFamily='Raleway'
                fontSize='42px'
                fontWeight='700'
                color='white'
                marginBottom='30px'
            >
                What would you like to do?
            </Text>  
            <Box width='60%' marginTop='50px'>
                <SectionButton
                    bgColour='#EA6699'
                    target={ () => onFormOpenHandler() }
                >
                    Donate a new item
                </SectionButton>
                <Box
                    d='flex'
                    alignItems='center'
                    justifyContent='center'
                    bg='transparent'
                    border='3px solid white'
                    height='80px'
                    width='100%'
                    borderRadius='10px'
                    padding='24px 30px'
                    margin='12px auto'
                    marginTop='40px'
                    cursor='pointer'
                    onClick={onRedirectHandler}
                >
                      <Text
                        fontFamily='Raleway'
                        fontSize='24px'
                        fontWeight='700'
                        color='white'
                    >
                       View my donated items
                    </Text>
                    <Box
                        height='28px'
                        width='28px'
                        bg='#EA6699'
                        borderRadius='50%'
                        d='flex'
                        justifyContent='center'
                        alignItems='center'
                        marginLeft='20px'
                    >
                        <Text
                            fontFamily='Raleway'
                            fontSize='24px'
                            fontWeight='700'
                            color='white'                
                        >
                            1
                        </Text>  
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OptionSection