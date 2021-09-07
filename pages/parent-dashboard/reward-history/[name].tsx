import { NextPage } from "next"
import { getData } from "utils/getData";
import { Box, Text, Image } from '@chakra-ui/react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { FiCheck } from 'react-icons/fi'; 

import ParentLayout from "@/components/shared-components/layouts/parent-layout"
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import ColourSection from "@/components/shared-components/sections/colour-section";
import CustomIconButton from '@/components/shared-components/buttons/custom-icon-button';
import TextIconButton from "@/components/shared-components/buttons/text-and-icon-btn";

interface Props {
    profile: any;
}

const RewardHistory: NextPage<Props> = ({ profile }): JSX.Element => {

    const router = useRouter();

    return (
        <ParentLayout>
            <Box
                d='flex' 
                mt='2' 
                width='100%'
                margin='auto'
                overflow='hidden'
                borderRadius='10px'
            >
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#EAD0DA' 
                        image='../../icons/manage-acounts.svg' 
                        title='Manage Accounts' 
                        context='Here you can mangae your Kid’s accounts' 
                        btnColor='#EA6699'
                    />
                </Box>  
                <ColourSection 
                    bgColour='#EA6699'
                    thumbColor='#EAD0DA'
                    trackColor='#B85078'
                >
                     <Box
                        position='absolute'
                        right='60px'
                        top='30px'
                        width='55px'
                        height='55px'
                    >
                        <CustomIconButton 
                            bgColour='#66B8EC'
                            width='55px'
                            height='55px'
                            destinationHandler={() => router.push('/parent-dashboard/section/manage-accounts')}
                            icon={ <HiArrowNarrowLeft /> }
                        />
                    </Box> 
                    <Box
                        d='flex'
                        flexDirection='column'
                        width='60%'
                    >
                        <Text
                            fontFamily='Raleway'
                            fontSize='38px'
                            fontWeight='700'
                            color='white'
                            marginBottom='50px'
                        >
                            { profile.title } -  Reward History
                        </Text>  
                    </Box>
                    {
                        profile.history.map((item: any) => {
                        return (
                                <Box
                                    key={ item.id }
                                    d='flex'
                                    justifyContent='space-between'
                                    alignItems='center'
                                    height='150px'
                                    width='100%'
                                    bg='white'
                                    borderRadius='20px'
                                    padding='25px 35px'
                                    marginBottom='2%'
                                >
                                    <Box
                                        fontFamily='Raleway'
                                        fontWeight='700'
                                        d='flex'
                                        alignItems='center'
                                    >
                                        <Box>
                                            <Text
                                                fontSize='38px'
                                                color='#333333'
                                            > 
                                                { item.title } 
                                            </Text>
                                            <Box
                                                display='inline-flex'
                                                flexDirection='row'
                                                alignItems='center'
                                            >
                                                <Text
                                                    fontSize='28px'
                                                    color='#F6C165'
                                                    marginRight='10px'
                                                > 
                                                    { item.amount } 
                                                </Text>
                                                <Image src="../../icons/toyken-single.png" alt="coin" height='38px' width='38px' />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        display='flex'
                                        alignItems='center'
                                        width='45%'
                                        flexWrap='wrap'
                                        justifyContent='flex-end'
                                    >
                                        <TextIconButton
                                            onClick={() => {}}
                                            width='45%'
                                            color='#EE0000'
                                       >
                                           Cancel
                                        </TextIconButton>
                                       <TextIconButton
                                            onClick={() => {}}
                                            icon={<FiCheck />}
                                            bgColour='#66B8EC'
                                            width='45%'
                                       >
                                           Approve
                                        </TextIconButton>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </ColourSection>     
            </Box>
        </ParentLayout>
    )
}

export default RewardHistory

export const getStaticProps = async (ctx: any) => {

    const name = ctx.params.name;

    const data = await getData('child-profiles.json');
    const profile = data.profiles.find( (item: any) => item.name === name );

    if(!profile) {
        return { notFound: true }
    }

    return{
        props: { profile }
    }
}

export const getStaticPaths = async () => {

    const data = await getData('child-profiles.json');
    const names = data.profiles.map((item: any) => ({params: { name: item.name }}));

    return{
        paths: names,
        fallback: false
    }
}