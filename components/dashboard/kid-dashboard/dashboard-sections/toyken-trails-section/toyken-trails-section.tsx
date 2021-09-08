import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";

const ToykenTrailsSection: NextPage = (): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#FD8300'
            thumbColor='#FDD7AF'
            trackColor='#C96800'
        >
            <p>Trails</p>
        </ColourSection>
    )
}

export default ToykenTrailsSection