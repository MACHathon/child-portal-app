import { NextPage } from "next"
import { ChangeEvent } from "react"
import { Select } from "@chakra-ui/react";

type Options = {
    id: string,
    value: string
}

interface Props {
    name?: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: Options[];
}

const SelectField: NextPage<Props>= ({ onChange, name, placeholder, options}): JSX.Element => {

    return(
        <Select 
        placeholder={placeholder} 
        size="lg" 
        name={name}  
        height='70px'
        width='100%'
        borderRadius='10px'        
        fontSize="16px"
        padding='0'
        margin='12px auto'
        marginBottom='25px'
        bg='#e7e7e7'
        textColor='#7C7763'
        border='none'
        onChange={onChange}>
            {
                options.map((value, index) => <option key={value.id} value={value.id}>{value.value}</option>)
            }
    </Select>
    )
}

export default SelectField