import { NextPage } from "next";

import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import SectionLayout from "@/components/shared-components/layouts/section-layout";
import ToykenTrailsSection from "@/components/dashboard/kid-dashboard/dashboard-sections/toyken-trails-section/toyken-trails-section";

const ToykenTrails: NextPage = ():JSX.Element => {
    
    return (
        <DashboardLayout>
             <SectionLayout>
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#FDD7AF' 
                        image='../../icons/signpost.svg' 
                        title='Toyken Trails' 
                        context='Exchange your Toykens for rewards!' 
                        btnColor='#FD8300'
                    />
                </Box>
                <ToykenTrailsSection />
             </SectionLayout>
        </DashboardLayout>
    )
}

export default ToykenTrails;
