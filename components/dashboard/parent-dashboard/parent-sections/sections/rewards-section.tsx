import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";
import { CreateReward } from "types/create-rewards";
import OpenFormButton from "./open-form-button";
import RewardsList from "@/components/shared-components/rewards-list/rewards-list";

interface Props {
    rewards: CreateReward[]
    onSectionSwitch: () => void
}

const RewardsSection: NextPage<Props> = ({ rewards, onSectionSwitch }): JSX.Element => {
    return (
        <ColourSection bgColour='#66B8EC'>
            <OpenFormButton onClick={onSectionSwitch}/>
            <RewardsList 
                rewards={rewards} 
                deleteOnClick={() => {}} 
                editOnClick={() => {}} 
            />
        </ColourSection>
    )

}

export default RewardsSection