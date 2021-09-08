import { NextPage } from "next";

import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import DonateItemsSection from "@/components/dashboard/kid-dashboard/dashboard-sections/donate-items-section/donate-items-section";
import SectionLayout from "@/components/shared-components/layouts/section-layout";

const DonateItems: NextPage = ():JSX.Element => {
    
    return (
        <DashboardLayout>
            <SectionLayout>
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#ACD9F0' 
                        image='../../icons/teddy-bear.svg' 
                        title='Donate Items' 
                        context='Donate Toys, Games and more for Toykens!' 
                        btnColor='#66B8EC'
                    />
                </Box>
                <DonateItemsSection />
            </SectionLayout>
        </DashboardLayout>
    )
}

export default DonateItems;
