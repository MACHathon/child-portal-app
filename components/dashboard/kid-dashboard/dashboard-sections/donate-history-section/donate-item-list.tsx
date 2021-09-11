import { NextPage } from "next"
import { Fragment } from "react"
import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
    items: any;
}

const DonateItemList: NextPage<Props> = ({ items }): JSX.Element => {
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
                                <Box
                                    d='flex'
                                    flexDirection='column'
                                    alignItems='flex-start'
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
                                            color={ item.done === true ? '#333333' : '#000'}
                                            marginRight='10px'
                                            > 
                                            { item.comment } 
                                        </Text>
                                        {
                                            item.done === true 
                                            && <Text
                                                    fontSize='22px'
                                                    color='#F6C165'
                                                >
                                                    - { item.toykens } Toykens added
                                                </Text>
                                        }
                                    </Box>
                                    {/* { item.matched == true && item.done == false ?
                                        <Text
                                            d='flex'
                                            alignItems='center'
                                            justifyContent='center'
                                            w='100px'
                                            h='30px'
                                            onClick={() => {}}
                                            bg={ item.done === 'true' ? '#97D4A8' : '#F6D396'}
                                            color='#333333'
                                            margin='25px 0'
                                        >
                                        { 'Take action' } 
                                        </Text>
                                    : null} */}
                                   
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }
        </Fragment>
    )
}

export default DonateItemList