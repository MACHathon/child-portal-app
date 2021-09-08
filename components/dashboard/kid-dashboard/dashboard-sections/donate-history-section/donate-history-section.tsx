import ColourSection from "@/components/shared-components/sections/colour-section"
import { NextPage } from "next"

const DonateHistorySection: NextPage = (): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#66B8EC'
            thumbColor='#ACD9F0'
            trackColor='#5091BA'
        >
            <p>History</p>
        </ColourSection>
    )
}

export default DonateHistorySection