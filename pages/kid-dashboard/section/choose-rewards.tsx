import { NextPage } from "next";

import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import ChooseRewardsSection from "@/components/dashboard/kid-dashboard/dashboard-sections/choose-rewards-section/choose-rewards-section";
import SectionLayout from "@/components/shared-components/layouts/section-layout";
import { getData } from "utils/getData";
import { CreateReward } from "types/create-rewards";

interface Props {
    rewards: CreateReward[];
}

const DonateItems: NextPage<Props> = ({ rewards }):JSX.Element => {
    
    return (
        <DashboardLayout>
             <SectionLayout>
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#EAD0DA' 
                        image='../../icons/gift.svg' 
                        title='Choose Rewards' 
                        context='Exchange your Toykens for rewards!' 
                        btnColor='#EA6699'
                    />
                </Box>
                <ChooseRewardsSection rewards={rewards}/>
             </SectionLayout>
        </DashboardLayout>
    )
}

export default DonateItems;

export const getStaticProps = async () => {

    const data = await getData('parent-rewards-data.json');
  
    if(!data) {
        return { 
            redirect: {
                destination: '/kid-dashboard'
            }
         }
    }
  
    return{
        props: { rewards: data.rewards}
    }
}