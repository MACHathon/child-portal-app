import { NextPage } from "next";
import { Fragment } from "react";
import { IoCloseOutline, IoCheckmarkOutline } from 'react-icons/io5'

import { Box, Text, Image } from "@chakra-ui/react";

interface Props {
    items: any[]
    onRejectHandler: (type: string) => void
    onAddHandler: (type: string) => void
}

const ReviewList: NextPage<Props> = ({ items, onAddHandler, onRejectHandler}): JSX.Element => {

    return (
        <Fragment>
        {
            items &&
            items.map((item: any) => {
                return (
                    <Box
                        key={ item.id }
                        d='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        height='190px'
                        width='100%'
                        bg='white'
                        borderRadius='20px'
                        marginBottom='2%'
                        overflow='hidden'
                        marginTop='30px'
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
                            <Box
                                d='flex'
                                flexDirection='column'
                                alignItems='flex-start'
                                padding='25px 0'
                            >
                                <Text
                                    fontSize='38px'
                                    color='#333333'
                                > 
                                    { item.name } 
                                </Text>
                                <Box
                                    d='flex'
                                    alignItems='center'
                                >
                                    <Text
                                        fontSize='22px'
                                        color='#333333'
                                    > 
                                        { item.type } - Condition: 
                                    </Text>
                                    <Text
                                        fontSize='22px'
                                        color='#00BB29'
                                        marginLeft='5px'
                                    > 
                                        { (item.condition).toUpperCase() }
                                    </Text>
                                </Box>
                                <Box
                                    d='flex'
                                    marginTop='20px'
                                >
                                    {
                                         item.drop_locally 
                                         && <Text
                                                 fontSize='22px'
                                                 color='#333333'
                                                 bg='#E8E8E8'
                                                 padding='4px 8px'
                                                 textAlign='center'
                                                 marginRight='20px'
                                             >
                                                 Drop off locally
                                             </Text>

                                    }
                                    {
                                        item.deliver 
                                        && <Text
                                                fontSize='22px'
                                                color='#333333'
                                                bg='#E8E8E8'
                                                padding='4px 8px'
                                                textAlign='center'
                                                marginRight='20px'
                                            >
                                                Deliver
                                            </Text>
                                    }
                                     {
                                        item.collection 
                                        && <Text
                                                fontSize='22px'
                                                color='#333333'
                                                bg='#E8E8E8'
                                                padding='4px 8px'
                                                textAlign='center'
                                                marginRight='20px'
                                            >
                                                Collection (20 km away)
                                            </Text>
                                    }
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            height='100%'
                        >
                            <Box
                                bg='#00BB29'
                                width='155px'
                                height='50%'
                                color='white'
                                cursor='pointer'
                                d='flex'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='60px'
                                onClick={() => onAddHandler('add')}
                            >
                                <IoCheckmarkOutline />
                            </Box>
                            <Box
                                bg='#EE0000'
                                width='155px'
                                height='50%'
                                color='white'
                                cursor='pointer'
                                d='flex'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='60px'
                                onClick={() => onRejectHandler('reject')}
                            >
                                <IoCloseOutline />
                            </Box>
                        </Box>
                    </Box>
                )
            })
        }
    </Fragment>
    )
}

export default ReviewList