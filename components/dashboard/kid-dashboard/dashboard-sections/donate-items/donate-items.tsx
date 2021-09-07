import { NextPage } from "next";

import ColourSection from "@/components/shared-components/sections/colour-section";
import DonateForm from "./form-component/donate-form";

const DonateItems: NextPage = (): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#66B8EC'
            thumbColor='#ACD9F0'
            trackColor='#5091BA'
        >
            <DonateForm />
        </ColourSection>
    )
}

export default DonateItems