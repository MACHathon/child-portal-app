import { NextPage } from "next"
import { getData } from "utils/getData"
import { useState } from "react";

import RewardsSection from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/rewards-section";
import { CreateReward } from "types/create-rewards";
import ParentLayout from "@/components/shared-components/layouts/parent-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import RewardForm from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/reward-form";

interface Props {
    rewards: CreateReward[];
}

const ParentCreateReward: NextPage<Props> = ({ rewards }): JSX.Element => {

    const [ isFormOpen, setIsFormOpen ] = useState<Boolean>(false);

    const onSectionSwitch = (): void => {
        setIsFormOpen(prevState => !prevState)
    }

    const onCreateRewardHandler = ( reward: {name: string, cost: string, visibleFor: string} ): void=> {
        console.log(reward)
    }

    return (
        <ParentLayout>
            <Box
                d='flex' 
                mt='2' 
                width='100%'
                margin='auto'
                overflow='hidden'
                borderRadius='10px'
            >
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#ACD9F0' 
                        image='../../icons/teddy-bear.svg' 
                        title='Create Rewards' 
                        context='Create and manage Rewards' 
                        btnColor='#66B8EC'
                    />
                </Box>
                {
                    isFormOpen 
                    ? <RewardForm 
                        onSectionSwitch={onSectionSwitch}
                        onCreateRewardHandler={onCreateRewardHandler}
                    />
                    : <RewardsSection 
                        rewards={rewards} 
                        onSectionSwitch={onSectionSwitch}
                    />
                }
            </Box>

        </ParentLayout>
    )
}

export default ParentCreateReward

export const getStaticProps = async () => {

    const data = await getData('parent-rewards-data.json');
  
    if(!data) {
        return { 
            redirect: {
                destination: '/parent-dashboard'
            }
         }
    }
  
    return{
        props: { rewards: data.rewards}
    }
}