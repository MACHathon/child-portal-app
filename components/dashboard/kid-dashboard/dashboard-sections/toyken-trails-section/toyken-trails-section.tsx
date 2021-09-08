import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";
import TrailsList from "./trails-list";

interface Props {
    trails: any;
}

const ToykenTrailsSection: NextPage<Props> = ({ trails }): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#FD8300'
            thumbColor='#FDD7AF'
            trackColor='#C96800'
        >
            <TrailsList trails={trails} />
        </ColourSection>
    )
}

export default ToykenTrailsSection