import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";
import { Box, Image, Text } from "@chakra-ui/react";
import { CreateReward } from "types/create-rewards";

interface Props {
    rewards: CreateReward[];
}

const RewardsSection: NextPage<Props> = ({ rewards }): JSX.Element => {
    return (
        <ColourSection bgColour='#66B8EC'>
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
                            >
                                <p>Edit</p>
                                <p>Delete</p>
                            </Box>
                        </Box>
                    )
                })
            }          
        </ColourSection>
    )

}

export default RewardsSection