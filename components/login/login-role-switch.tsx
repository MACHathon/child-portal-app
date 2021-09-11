import { NextPage } from "next"
import { Box, Text } from '@chakra-ui/react'
import { useState } from "react"
import { motion } from 'framer-motion';
import { RoleSwitchState } from "./roleSwitchState";

interface LoginRoleSwitchProps {
    handleRoleChange: (toRole: RoleSwitchState) => void;
    isParentSelected: boolean;
}

const LoginRoleSwitch: React.FC<LoginRoleSwitchProps> = ({handleRoleChange, isParentSelected}) => {

    const MotionText = motion(Text);
   
    const handleChildClick = () => {
        handleRoleChange('child');
    }

    const handleParentClick = () => {
        handleRoleChange('parent');
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
            marginBottom='20px'
            width='100%'
        >
            <MotionText   
                whileHover={{ scale: 1.1, rotate: 20 }}
                whileTap={{ scale: 1, rotate: 0 }}
                cursor='pointer'     
                onClick={handleChildClick}      
                borderBottom={isParentSelected ? '' : '5px dashed pink'}
            >
                Child
            </MotionText>
            <MotionText
                whileHover={{ scale: 1.15, rotate: -25 }}
                whileTap={{ scale: 1, rotate: 0 }}
                cursor='pointer' 
                onClick={handleParentClick}
                borderBottom={isParentSelected ? '5px dashed pink' : ''}                                             
            >
                Parent
            </MotionText>
        </Box>
    )
}

export default LoginRoleSwitch