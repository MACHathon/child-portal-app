import { NextPage } from "next"
import { Box } from "@chakra-ui/react";
import { useState } from "react";

import ParentLayout from "@/components/shared-components/layouts/parent-layout";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import AccountsSection from "@/components/dashboard/parent-dashboard/parent-sections/sections/accounts-section/accounts-section";
import CreateAccount from "@/components/dashboard/parent-dashboard/parent-sections/sections/accounts-section/create-account-form";
import { getData } from "utils/getData";
import SectionLayout from "@/components/shared-components/layouts/section-layout";

interface Props {
    profiles: any
}

const ManageAccounts: NextPage<Props> = ({ profiles }): JSX.Element => {

    const [ isFormOpen, setIsFormOpen ] = useState<Boolean>(false);

    const onSectionSwitch = (): void => {
        setIsFormOpen(prevState => !prevState)
    }

    return (
        <ParentLayout>
            <SectionLayout>
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#EAD0DA' 
                        image='../../icons/manage-acounts.svg' 
                        title='Manage Accounts' 
                        context='Here you can mangae your Kid’s accounts' 
                        btnColor='#EA6699'
                    />
                </Box>
                {
                    isFormOpen
                    ?  <CreateAccount onSectionSwitch={onSectionSwitch}/>
                    :  <AccountsSection 
                            onSectionSwitch={onSectionSwitch}
                            profiles={profiles}
                        />
                }          
            </SectionLayout>
        </ParentLayout>
    )
}

export default ManageAccounts

export const getStaticProps = async () => {

    const data = await getData('child-profiles.json');
  
    if(!data) {
        return { 
            redirect: {
                destination: '/parent-dashboard'
            }
         }
    }
  
    return{
        props: { profiles: data.profiles}
    }
}
