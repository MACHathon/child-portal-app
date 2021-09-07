import { NextPage } from "next"

import ColourSection from "@/components/shared-components/sections/colour-section";
import OpenFormButton from "../rewards-section/open-form-button";
import SectionsList from "@/components/shared-components/sections-list/sections-list";

interface Props {
    onSectionSwitch: () => void
    profiles: any
}

const AccountsSection: NextPage<Props> = ({ onSectionSwitch, profiles }): JSX.Element => {
    return (
        <ColourSection 
            bgColour='#EA6699'
            thumbColor='#EAD0DA'
            trackColor='#B85078'
        >
            <OpenFormButton 
                onClick={onSectionSwitch}
                text=' + Add Account'
            />
            <SectionsList 
                items={profiles} 
                history
                deleteOnClick={() => {}} 
                editOnClick={() => {}} 
            />
        </ColourSection>
    )

}

export default AccountsSection