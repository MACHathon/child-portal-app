import { NextPage } from "next";

import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import SpendToykensSection from "@/components/dashboard/kid-dashboard/dashboard-sections/spend-toykens-section/spend-toykens-section";
import SectionLayout from "@/components/shared-components/layouts/section-layout";

const SpendToykens: NextPage = ():JSX.Element => {

    return (
        <DashboardLayout>
            <SectionLayout>
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#F6D396' 
                        image='../../icons/toyken-stack.png' 
                        title='Spend my Toykens' 
                        context='Exchange your Toykens for rewards!' 
                        btnColor='#F6C165'
                    />
                </Box>
                <SpendToykensSection />
            </SectionLayout>
        </DashboardLayout>
    )
}

export default SpendToykens;
