import { Input } from "@chakra-ui/react"
import { NextPage } from "next"
import { ChangeEvent } from "react"

interface Props {
    name?: string;
    placeholder?: string;
    isPassword: boolean;
    value?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInputField: NextPage<Props>= ({ onChange, name, placeholder, isPassword, value}): JSX.Element => {

    return(
        <Input 
            height='70px'
            width='100%'
            borderRadius='10px'
            padding='24px 32px'
            margin='12px auto'
            bg='#e7e7e7'
            _placeholder={{color:'#7C7763'}}
            border='none'
            type={ isPassword ? 'password' : 'text' } 
            name={name} 
            value={value}
            placeholder={placeholder} 
            onChange={onChange}
        />
    )
}

export default TextInputField