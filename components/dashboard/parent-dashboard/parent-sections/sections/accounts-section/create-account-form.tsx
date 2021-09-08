import { NextPage } from "next"
import { Box, Text } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react";

import ColourSection from "@/components/shared-components/sections/colour-section"
import SubmitField from "@/components/shared-components/input-fields/submit-field";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import { Child } from "types/child";
import UploadImage from "@/components/shared-components/image-upload/image-upload";

interface Props {
    onSectionSwitch: () => void
}

const CreateAccount: NextPage<Props> = ({ onSectionSwitch }): JSX.Element => {

    const [createAccount, setCreateAccount] = useState<Child>({
        name: '',
        age: '',
        username: '',
        pin: ''
      });

    const { name, age, username, pin } = createAccount;

    const onImageUploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files) 
      }

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setCreateAccount({ ...createAccount, [name]: value });
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(createAccount);

        setCreateAccount({
          name: '',
          age: '',
          username: '',
          pin: '',
        });
    };

    return (
        <ColourSection  
            bgColour='#EA6699'
            thumbColor='#EAD0DA'
            trackColor='#B85078'
        >
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
                        Add a new Account
                    </Text>  
                </Box>
                <Box width="100%">
                    <form onSubmit={onHandleSubmit}>
                        <Box
                            display='flex'
                            width='100%'
                            justifyContent='space-between'
                            padding='0 5%'
                            alignItems='flex-start'
                        >             
                            <Box width='45%'>
                                <TextInputField
                                    isPassword={false}
                                    name="name"
                                    placeholder="Child Name"
                                    value={name}
                                    onChange={onHandleChange}
                                />
                                <TextInputField
                                    isPassword={false}
                                    name="age"
                                    placeholder="Child Age"
                                    value={age}
                                    onChange={onHandleChange}
                                />
                                <TextInputField
                                    isPassword={false}
                                    name="username"
                                    placeholder="Child Username"
                                    value={username}
                                    onChange={onHandleChange}
                                />
                                <TextInputField
                                    isPassword={true}
                                    name="pin"
                                    placeholder="Create a pin for your child"
                                    value={pin}
                                    onChange={onHandleChange}
                                />
                                <Box width="50%">
                                    <SubmitField value="Create Account" bgColor="#66B8EC" />
                                </Box>
                            </Box> 
                            <Box marginTop='20px' width='302px'>
                                <UploadImage onImageUploadHandler={onImageUploadHandler}/>
                                <Box
                                    color='white'
                                    fontFamily='Raleway'             
                                    marginTop='30px'
                                >
                                <Text
                                    fontSize='24px'
                                    fontWeight='700'
                                >
                                    Upload photo
                                </Text>
                            </Box>
                            </Box>    
                        </Box>
                    </form>
                </Box>
        </ColourSection>
    )
}

export default CreateAccount