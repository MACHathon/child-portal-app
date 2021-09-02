import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";

import ConfirmButton from "@/components/shared-components/buttons/confirm-button";
import TitleField from "@/components/shared-components/text-fields/title-field";

const Welcome: NextPage = (): JSX.Element => {

    const router = useRouter();
    const message = ' “Hi, I am Kylie and I will guide you through our Webiste.”'

    const MotionText = motion(Text);

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.08
            }
        }
    }

    const letter = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <Box
            d='flex'
            flexDirection='column'
            alignItems='center'
            margin='5% auto 0 auto'
        >
            <TitleField 
                fontSize='54px'
                color='#66B8EC'
            >
                Great to have you on board!
            </TitleField>
            <Box 
                d='flex'
                flexDirection='column'
                alignItems='center'
                width='430px'
                height='430px'
                marginBottom='20%'
            >
                <Image 
                    src='../../images/assisten-kylie.svg' 
                    height='326px'
                    width='326px'
                    margin='30px auto'
                />
                <MotionText
                    marginLeft='1%'
                    fontFamily='Raleway'
                    fontSize='34px'
                    fontWeight='700'
                    color='#333333'
                    textAlign='center'
                    marginBottom='10%'
                    variants={ sentence }
                    initial='hidden'
                    animate='visible'
                >
                {
                    message.split('').map(( char, index ) => {
                        return (
                            <motion.span 
                                variants={ letter }
                                key={ index }
                            >
                                { char }
                            </motion.span>
                        )
                    })
                }   
                </MotionText>
                <ConfirmButton onClick={() => router.push('/parent-registration/add-child')}>Continue</ConfirmButton>
            </Box>
        </Box>
    )
}

export default Welcome;