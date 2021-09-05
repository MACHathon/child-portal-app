import SubmitField from "@/components/shared-components/input-fields/submit-field";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next"
import { ChangeEvent, FormEvent, useState } from "react";
import DeliveryChackBoxes from "./delivrery-checkboxes";


//WIP
const DonateForm: NextPage = (): JSX.Element => { 

    const [ checkedOption, setCheckedOption ] = useState({});
    const [ registerItem, setRegisterItem ] = useState({
        item: '',
        type: '',
        condition: ''
     });

     const { item, type, condition } = registerItem;

     const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setRegisterItem({...registerItem, [name]: value})
    };

    const itemToSubmit = {
        checkedOption: Object.keys(checkedOption),
        item: registerItem.item,
        type: registerItem.type,
        condition: registerItem.condition
    }

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        console.log(itemToSubmit);
        setCheckedOption({});
        setRegisterItem({
            item: '',
            type: '',
            condition: ''
        });
    };

     
    return (
        <Box
            d='flex'
            flexDirection='column'
            width='40%'
        >
            <form onSubmit={onHandleSubmit}>
                <TextInputField isPassword={false} name='item' placeholder='Describe your Item'  
                    value={item} onChange={onHandleChange} />
                <TextInputField isPassword={false} name='type' placeholder='Type of item'
                    value={type} onChange={onHandleChange}/>
                <TextInputField isPassword={false} name='condition' placeholder='Condition'
                    value={condition} onChange={onHandleChange}/>
                <DeliveryChackBoxes 
                    checkedOption={checkedOption}
                    setCheckedOption={setCheckedOption}
                />
                <Box
                    width='30%'
                >
                    <SubmitField value='Submit' bgColor='#EA6699' />
                </Box>            
            </form>
        </Box>
    )
}

export default DonateForm