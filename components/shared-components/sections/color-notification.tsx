import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { IoCloseOutline, IoCheckmarkOutline } from 'react-icons/io5'

interface Props {
    notificationType: string
}

const ColorNotification: NextPage<Props> = ({ notificationType }): JSX.Element => {

    return (
        <Box
            d='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='190px'
            width='100%'
            bg={ notificationType==='add' ? '#00BB29' : '#EE0000'}
            borderRadius='20px'
            marginBottom='2%'
            marginTop='30px'
        >
            <Box
                fontSize='60px'
                color='white'
            >
                { notificationType==='add' ? <IoCheckmarkOutline /> : <IoCloseOutline />}
            </Box>
            <Text
                fontSize='28px'
                color='white'
            > 
                { notificationType==='add' ? 'Added to your Inventory' : 'Rejected'}
            </Text>
        </Box>
    )
}

export default ColorNotification