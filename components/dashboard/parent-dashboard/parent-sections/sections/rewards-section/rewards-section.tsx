import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";
import { CreateReward } from "types/create-rewards";
import OpenFormButton from "./open-form-button";
import SectionsList from "@/components/shared-components/sections-list/sections-list";

interface Props {
    rewards: CreateReward[]
    onSectionSwitch: () => void
}

const RewardsSection: NextPage<Props> = ({ rewards, onSectionSwitch }): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#66B8EC'
            thumbColor='#ACD9F0'
            trackColor='#5091BA'
        >
            <OpenFormButton 
                onClick={onSectionSwitch} 
                text=' + Add Reward'
            />
            <SectionsList 
                items={rewards} 
                deleteOnClick={() => {}} 
                editOnClick={() => {}} 
            />
        </ColourSection>
    )

}

export default RewardsSection