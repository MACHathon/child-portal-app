import { Box } from "@chakra-ui/react";
import { NextPage } from "next"
import { ChangeEvent, FormEvent, useState } from "react";

import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import SubmitField from "@/components/shared-components/input-fields/submit-field";
import { Child } from "types/child";

interface Props {
    registerNewChild: (child: Child) => void;
}

const AddChildForm: NextPage<Props> = ({ registerNewChild }): JSX.Element => { 

    const [ registerChild, setRegisterChild ] = useState<Child>({
        name: '',
        age: '',
        username: '',
        pin: ''
     });

     const { name, age, username, pin } = registerChild;

     const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setRegisterChild({...registerChild, [name]: value})
    };

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        registerNewChild(registerChild);
        setRegisterChild({
            name: '',
            age: '',
            username: '',
            pin: ''
        });
    };

     
    return (
        <Box
            d='flex'
            flexDirection='column'
            alignItems='center'
        >
            <form onSubmit={onHandleSubmit}>
                <TextInputField isPassword={false} name='name' placeholder='Child Name'
                value={name} onChange={onHandleChange} />

                <TextInputField isPassword={false} name='age' placeholder='Child Age'
                value={age} onChange={onHandleChange} />

                <TextInputField isPassword={false} name='username' placeholder='Child Username'
                value={username} onChange={onHandleChange}/>

                <TextInputField isPassword={false} name='pin' placeholder='Create a pin for your child'
                value={pin} onChange={onHandleChange}/>

                <SubmitField value='Add Child' bgColor='#66B8EC'/>
            </form>
        </Box>
    )
}

export default AddChildForm