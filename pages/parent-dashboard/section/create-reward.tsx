import { NextPage } from "next"
import { getData } from "utils/getData"

import RewardsSection from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section";

interface Props {
    rewards: any[];
}

const DashboardParentSection: NextPage<Props> = ({ rewards }): JSX.Element => {

    return (
       <RewardsSection rewards={rewards}/>
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

    console.log(data.rewards)
  
    return{
        props: { rewards: data.rewards}
    }
}