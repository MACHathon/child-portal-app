import { NextPage } from "next";

import ColourSection from "@/components/shared-components/sections/colour-section";
import DonateForm from "./form-component/donate-form";

const DonateItems: NextPage = (): JSX.Element => {
    return (
        <ColourSection bgColour='#66B8EC'>
            <DonateForm />
        </ColourSection>
    )
}

export default DonateItems