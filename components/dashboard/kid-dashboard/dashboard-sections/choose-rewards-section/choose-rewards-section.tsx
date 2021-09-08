import { NextPage } from "next";

import ColourSection from "@/components/shared-components/sections/colour-section";
import { CreateReward } from "types/create-rewards";
import SectionsList from "@/components/shared-components/sections-list/sections-list";

interface Props {
    rewards: CreateReward[];
}

const ChooseRewardsSection: NextPage<Props> = ({ rewards }): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#EA6699'
            thumbColor='#EAD0DA'
            trackColor='#B85078'
        >
             <SectionsList
                childList 
                items={rewards} 
                rewardOnClick={() => {}} 
            />
        </ColourSection>
    )
}

export default ChooseRewardsSection