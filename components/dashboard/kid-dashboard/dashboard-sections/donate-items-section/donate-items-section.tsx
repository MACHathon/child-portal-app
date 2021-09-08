import { NextPage } from "next";

import ColourSection from "@/components/shared-components/sections/colour-section";
import DonateForm from "./form-component/donate-form";
import { useState } from "react";
import OptionSection from "./options-section/option-section";

const DonateItemsSection: NextPage = (): JSX.Element => {

    const [ isFormOpen, setIsFormOpen ] = useState<boolean>(false)

    const onFormOpenHandler = (): void => {
        setIsFormOpen(prevState => !prevState);
    }

    return (
        <ColourSection 
            bgColour='#66B8EC'
            thumbColor='#ACD9F0'
            trackColor='#5091BA'
        >
            {
                isFormOpen 
                ? <DonateForm />
                : <OptionSection onFormOpenHandler={onFormOpenHandler}/>
            }
            
        </ColourSection>
    )
}

export default DonateItemsSection