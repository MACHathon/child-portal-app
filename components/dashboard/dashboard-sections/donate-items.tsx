import { NextPage } from "next";

import ColourSection from "@/components/shared-components/sections/colour-section";

const DonateItems: NextPage = (): JSX.Element => {
    return (
        <ColourSection bgColour='#66B8EC'>
            <p>Donate</p>
        </ColourSection>
    )
}

export default DonateItems