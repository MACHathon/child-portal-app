import { Box, Text, Image } from "@chakra-ui/react"
import { NextPage } from "next"
import { Fragment } from "react"
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri'

import { CreateReward } from "types/create-rewards";
import OptionButton from "../buttons/option-button";

interface Props {
    rewards: CreateReward[]
    deleteOnClick?: () => void
    editOnClick?: () => void
}

const RewardsList: NextPage<Props> = ({ rewards, deleteOnClick, editOnClick }): JSX.Element => {
    return (
        <Fragment>
             {
                rewards.map(reward => {
                    return (
                        <Box
                            key={ reward.id }
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
                            >
                                <Text
                                    fontSize='38px'
                                    color='#333333'
                                > 
                                    { reward.title } 
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
                                        { reward.price } 
                                    </Text>
                                    <Image src="../../icons/toyken-single.png" alt="coin" height='38px' width='38px' />
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                alignItems='center'
                                width='250px'
                                justifyContent='space-between'
                            >
                                <OptionButton icon={ <FiEdit2 />} text={'Edit'} color='#66B8EC' onClick={() => editOnClick} />
                                <OptionButton icon={ <RiDeleteBin6Line />} text={'Delete'} color='#EE0000' onClick={() => deleteOnClick} />
                            </Box>
                        </Box>
                    )
                })
            }  
        </Fragment>
    )
}

export default RewardsList