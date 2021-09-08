import { Box, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Fragment } from "react";
import { FiEdit2 } from 'react-icons/fi';
import { VscHistory } from 'react-icons/vsc';
import { RiDeleteBin6Line, RiArrowRightLine } from 'react-icons/ri';

import OptionButton from "../buttons/option-button";
import TextIconButton from "../buttons/text-and-icon-btn";

interface Props {
    items: any[]
    deleteOnClick?: () => void
    editOnClick?: () => void
    rewardOnClick?: () => void
    history?: boolean
    childList?: boolean
}

const SectionsList: NextPage<Props> = ({ items, deleteOnClick, history, editOnClick, rewardOnClick, childList }): JSX.Element => {

    const router = useRouter();

    return (
        <Fragment>
             {
                items.map(item => {
                    return (
                        <Box
                            key={ item.id }
                            d='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            height='150px'
                            width='100%'
                            bg='white'
                            borderRadius='20px'
                            padding='25px 35px'
                            marginBottom='2%'
                        >
                            <Box
                                fontFamily='Raleway'
                                fontWeight='700'
                                d='flex'
                                alignItems='center'
                            >
                                {
                                    item.image &&
                                    <Image
                                        src={item.image}
                                        marginRight='30px'
                                        objectFit='contain'
                                        width='85px'
                                        height='85px'
                                        borderRadius='50%'
                                    >
                                    </Image>
                                }
                                <Box>
                                    <Text
                                        fontSize='38px'
                                        color='#333333'
                                    > 
                                        { item.title } 
                                    </Text>
                                    <Box
                                        display='inline-flex'
                                        flexDirection='row'
                                        alignItems='center'
                                    >
                                        <Text
                                            fontSize='28px'
                                            color='#F6C165'
                                            marginRight='10px'
                                        > 
                                            { item.amount } 
                                        </Text>
                                        <Image src="../../icons/toyken-single.png" alt="coin" height='38px' width='38px' />
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                alignItems='center'
                                width='45%'
                                flexWrap='wrap'
                                justifyContent='flex-end'
                            >
                                {
                                    childList 
                                    ?  <TextIconButton onClick={() => rewardOnClick} icon={<RiArrowRightLine />}  bgColour='#66B8EC' width='100%' >Select this reward</TextIconButton>
                                    : <Fragment>
                                        <OptionButton icon={ <FiEdit2 />} text={'Edit'} color='#66B8EC' onClick={() => editOnClick} />
                                        {
                                            history &&
                                            <OptionButton icon={ <VscHistory />} text={'History'} color='#F6C165' onClick={() => router.push(`/parent-dashboard/reward-history/${item.name}`)} />
                                        }                      
                                        <OptionButton icon={ <RiDeleteBin6Line />} text={'Delete'} color='#EE0000' onClick={() => deleteOnClick} />
                                    </Fragment>
                                }
                            </Box>
                        </Box>
                    )
                })
            }  
        </Fragment>
    )
}

export default SectionsList