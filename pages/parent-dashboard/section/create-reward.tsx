import { NextPage } from "next"
import { getData } from "utils/getData"
import { useState } from "react";

import RewardsSection from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section";
import { CreateReward } from "types/create-rewards";
import ParentLayout from "@/components/shared-components/layouts/parent-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/section-card";
import RewardForm from "@/components/dashboard/parent-dashboard/parent-sections/sections/reward-form";

interface Props {
    rewards: CreateReward[];
}

const DashboardParentSection: NextPage<Props> = ({ rewards }): JSX.Element => {

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
                    <SectionCard />
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

export default DashboardParentSection

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