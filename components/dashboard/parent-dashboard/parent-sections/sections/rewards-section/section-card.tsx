import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Image, Text } from "@chakra-ui/react";
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import CustomIconButton from '@/components/shared-components/buttons/custom-icon-button';

interface Props {
    bgColor: string
    image: string
    title: string
    context: string
    btnColor: string
}

const SectionCard: NextPage<Props> = ({ bgColor, image, title, context, btnColor }): JSX.Element  => {

    const router = useRouter();
    const MotionBox = motion(Box)

    return (
        <MotionBox 
            d='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            bg={ bgColor }
            width='326px'
            height='652px' 
            fontFamily='Raleway'
            lineHeight='1.2'  
            padding={6} 
        >
            <Image 
                src={ image }
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
                    { title }
                </Text>
                <Text
                    fontSize='20px' 
                    fontWeight='400'
                    align='center'
                >
                    { context }
                </Text>
                <CustomIconButton 
                    width='72px'
                    height='72px'
                    bgColour={ btnColor }
                    icon={<HiX />}
                    destinationHandler={() => router.back()}
                />
                </Box>
        </MotionBox>
    )
}

export default SectionCard