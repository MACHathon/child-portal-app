import type { NextPage } from 'next';
import { Card } from 'types/card-type';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { AiTwotoneStar } from 'react-icons/ai'
import { RiUserHeartFill } from 'react-icons/ri'
// import { getData } from 'utils/getData';

import ParentLayout from '@/components/shared-components/layouts/parent-layout';
import SectionButton from '@/components/dashboard/parent-dashboard/parent-sections/section-button/section-button';
import { ParentSection } from 'types/parent-section';


//Dummy date - ToBe removed
const parentSection: ParentSection[] = [
    {
        icon: <AiTwotoneStar />,
        bgColour: '#66B8EC',
        text: 'Create Rewards for my children',
        target: '/create-reward'
    },
    {
        icon: <RiUserHeartFill />,
        bgColour: '#EA6699',
        text: ' Manage Accounts',
        target: '/create-reward'
    }
]

interface Props {
    cards: Card[];
}

const ParentDashboard: NextPage<Props> = ({ cards }) => {
  
    return(       
        <ParentLayout>
            <Head>
                <title>Parent Portal - Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                d='flex'
                flexDirection='column'
                width='50%'
                margin='15% auto'
            >
                {
                    parentSection.map( (section: ParentSection, index: number) => {
                        return (
                            <SectionButton 
                                key={index}
                                icon={section.icon} 
                                bgColour={section.bgColour}
                                target={section.target}
                            >
                                { section.text }
                            </SectionButton>
                        )
                    })
                }       
            </Box>
        </ParentLayout>
      )
}

export default ParentDashboard;

// export const getStaticProps = async () => {

//     const data = await getData('card-test-data.json');
  
//     if(!data) {
//         return { 
//             redirect: {
//                 destination: '/'
//             }
//          }
//     }
  
//     return{
//         props: { cards: data.cards}
//     }
// }