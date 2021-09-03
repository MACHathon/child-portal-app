import { NextPage } from "next"
import { Box, Text } from '@chakra-ui/react'
import { useState } from "react"
import { motion } from 'framer-motion';

const LoginRoleSwitch: NextPage = (): JSX.Element => {

    const MotionText = motion(Text);
    const [ isParent, setIsParent ] = useState<boolean>(true);

    const onRoleToggleHandler = (): void => {
        setIsParent(prevState => !prevState)
    }

    //TODO clip path border
    return (
        <Box
            d='flex'
            alignItems='center'
            justifyContent='space-between'
            fontSize='28px' 
            fontWeight='bold'   
            padding='0 40px'
            marginBottom='60px'
            width='100%'
        >
            <MotionText   
                whileHover={{ scale: 1.1, rotate: 20 }}
                whileTap={{ scale: 1, rotate: 0 }}
                cursor='pointer'                                      
            >
                Child
            </MotionText>
            <MotionText
                whileHover={{ scale: 1.15, rotate: -25 }}
                whileTap={{ scale: 1, rotate: 0 }}
                cursor='pointer'                                      
            >
                Parent
            </MotionText>
        </Box>
    )
}

export default LoginRoleSwitch