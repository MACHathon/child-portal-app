import { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { HiArrowNarrowLeft } from 'react-icons/hi'

import ColourSection from "@/components/shared-components/sections/colour-section";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import SubmitField from "@/components/shared-components/input-fields/submit-field";
import { Box, Text } from "@chakra-ui/layout";
import CustomIconButton from '@/components/shared-components/buttons/custom-icon-button';

interface Props {
    onCreateRewardHandler: (reward: {name: string, cost: string, visibleFor: string}) => void
    onSectionSwitch: () => void
}

const RewardForm: NextPage<Props> = ({ onCreateRewardHandler, onSectionSwitch}): JSX.Element => {

    const [ createReward, setCreateReward ] = useState<{name: string, cost: string, visibleFor: string}>({
        name: '',
        cost: '',
        visibleFor: ''
     });

     const { name, cost, visibleFor } = createReward;

     const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setCreateReward({...createReward, [name]: value})
    };

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        onCreateRewardHandler(createReward);
        setCreateReward({
            name: '',
            cost: '',
            visibleFor: ''
        });
    };
    return (
        <ColourSection bgColour='#66B8EC'>
            <Box
                d='flex'
                flexDirection='column'
                justifyContent='center'
                height='100%'
                width='100%'
                bg='transparent'
                borderRadius='20px'
                border='5px dashed white'
                padding='38px'
            >    
                <Box
                    position='absolute'
                    right='60px'
                    top='60px'
                    width='55px'
                    height='55px'
                >
                    <CustomIconButton 
                        bgColour='#EA6699'
                        width='55px'
                        height='55px'
                        destinationHandler={onSectionSwitch}
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
                        marginBottom='30px'
                    >
                        Add a new Reward
                    </Text>  
                    <form onSubmit={onHandleSubmit}>
                        <TextInputField isPassword={false} name='name' placeholder='Name the Reward'
                        value={name} onChange={onHandleChange} white/>

                        <TextInputField isPassword={false} name='cost' placeholder='How many Toykens does it cost?'
                        value={cost} onChange={onHandleChange} white/>

                        <TextInputField isPassword={false} name='visibleFor' placeholder='Select all children that can see the reward'
                        value={visibleFor} onChange={onHandleChange} white/>

                        <Box
                            width='30%'
                        >
                            <SubmitField value='Submit' bgColor='#EA6699' />
                        </Box>
                    </form>
                </Box>
            </Box>
        </ColourSection>
    )
}

export default RewardForm