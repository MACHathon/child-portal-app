import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";

interface Props {
    rewards: any[];
}

const RewardsSection: NextPage<Props> = ({ rewards }): JSX.Element => {
    return (
        <ColourSection bgColour='#66B8EC'>
            Rewards
        </ColourSection>
    )

}

export default RewardsSection