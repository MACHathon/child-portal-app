import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Image, Text } from "@chakra-ui/react";
import { HiArrowNarrowRight, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import CustomIconButton from '@/components/shared-components/buttons/custom-icon-button';
import { Card } from 'types/card-type';

interface Props {
    card: Card
}
const DashboardCard: NextPage<Props> = ({ card }): JSX.Element  => {

    const router = useRouter();
    const { asPath } = useRouter()
    const currentPath = asPath === '/kid-dashboard' ? true : false;
    const MotionBox = motion(Box)
    
    const onRedirectHandler = (): void => {
        if(currentPath){
            router.push(`kid-dashboard/section/${card.card}`)
        }else {
            router.push('/kid-dashboard')
        }
    }

    return (
        <MotionBox 
            d='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            bg={ card.colour } 
            borderRadius={ currentPath ? 'lg' : 'none'}
            width='326px'
            height='652px' 
            fontFamily='Raleway'
            lineHeight='1.2'  
            padding={6} 
            whileHover={currentPath && {
                scale: 1.05,
                transition: { duration: .3 }
              }}
        >
            <Image 
                src={card.image} 
                alt='image' 
                height='170px' 
                width='170px' 
            />
            <Box
              d='flex'
              flexDirection='column'
              justifyContent='space-between'
              alignItems='center'
              height='50%'
              marginTop='60px'
            >
                <Text 
                    width='80%'
                    fontSize='44px' 
                    fontWeight='bold'                            
                    align='center'
                >
                    { card.title }
                </Text>
                <Text
                    fontSize='20px' 
                    fontWeight='400'
                    align='center'
                >
                    { card.context }
                </Text>
                <CustomIconButton 
                    width='72px'
                    height='72px'
                    bgColour={card.secondColour}
                    icon={currentPath ? <HiArrowNarrowRight/> : <HiX />}
                    destinationHandler={onRedirectHandler}
                />
                </Box>
        </MotionBox>
    )
}

export default DashboardCard