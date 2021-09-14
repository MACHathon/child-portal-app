import { NextPage } from "next"
import { Box, Input, IconButton, Text } from "@chakra-ui/react"
import { IoOptionsOutline, IoSearchOutline } from 'react-icons/io5'

interface Props {
    serachBar?: boolean
    support?: boolean
}

const ReviewHeader: NextPage<Props> = ({ serachBar, support }): JSX.Element => {
    return (
        <Box
            d='flex'
            alignItems='center'
            width='100%'
            justifyContent='space-between'
        >
            <Box
                d='fles'
                alignItems='center'
            >
                <IconButton 
                    aria-label="Filter"
                    _hover={{ bg: 'transperant' }}
                    fontSize='30px'
                    bg='none'
                    border='none'
                    marginRight='10px'
                    outline='none'
                    icon={<IoOptionsOutline />}
                />
                <Text
                    fontFamily='Raleway'
                    fontSize='22px'
                    color='#333333'
                >
                    Filter
                </Text>
            </Box>
            {
                serachBar 
                &&
                <Box
                    position='relative'
                >
                    <Input 
                        height='70px'
                        width='410px'
                        borderRadius='10px'
                        padding='24px 32px'
                        margin='12px auto'
                        bg='#E8E8E8'
                        _placeholder={{color:'#7C7763'}}
                        border='none'
                        type='text' 
                        placeholder='What are you searching for?'
                    />
                    <IconButton 
                        position='absolute'
                        right='5px'
                        top='30px'
                        aria-label="Search"
                        _hover={{ bg: 'transperant' }}
                        color='#7C7763'
                        fontSize='30px'
                        bg='none'
                        outline='none'
                        border='none'
                        marginRight='10px'
                        icon={<IoSearchOutline />}
                    />
                </Box>
            }
            {
                support
                &&
                <Text
                    fontFamily='Raleway'
                    fontSize='22px'
                    color='#66B8EC'
                    textDecor='underline'
                >
                    Support
                </Text>
            }
        </Box>
    )
}

export default ReviewHeader