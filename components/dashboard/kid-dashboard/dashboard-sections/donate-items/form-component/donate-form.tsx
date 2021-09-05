import SubmitField from "@/components/shared-components/input-fields/submit-field";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import SelectField from "@/components/shared-components/input-fields/select-input-field";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next"
import { getCategories } from "packages/Commercetools/Categories/getCategories";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DeliveryChackBoxes from "./delivrery-checkboxes";
import { Select } from "@chakra-ui/react";


type Category = {
    id: any;
    name: any;
}

//WIP
const DonateForm: NextPage = (): JSX.Element => { 

    const [ checkedOption, setCheckedOption ] = useState({});
    const [ selectedType, setSelectedType ] = useState('');
    const [ selectedCondition, setSelectedCondition ] = useState('');
    const [ registerItem, setRegisterItem ] = useState({
        name: '',
        description: '',
        type: '',
        condition: ''
     });

     const [ itemTypes, setItemTypes ] = useState<Category[]>([]);

     useEffect(() => {
        (async () => {
            let categories = await getCategories();
            console.log(categories);
            setItemTypes(categories);
        })();
      }, []);

     const { name, description, type, condition } = registerItem;

     const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setRegisterItem({...registerItem, [name]: value})
    };

    const itemToSubmit = {
        checkedOption: Object.keys(checkedOption),
        name: registerItem.name,
        description: registerItem.description,
        type: selectedType,
        condition: selectedCondition
    }

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        console.log(itemToSubmit);
        setCheckedOption({});
        setRegisterItem({
            name: '',
            description: '',
            type: '',
            condition: ''
        });
    };

    const onHandleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setSelectedType(value);
    };

    const onHandleConditionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setSelectedCondition(value);
    };
     
    return (
        <Box
            d='flex'
            flexDirection='column'
            width='40%'
        >
            <form onSubmit={onHandleSubmit}>
                <TextInputField isPassword={false} name='name' placeholder='The name of your item'  
                    value={name} onChange={onHandleChange} />
                <TextInputField isPassword={false} name='description' placeholder='Describe your Item'  
                    value={description} onChange={onHandleChange} />

                <SelectField 
                    placeholder='Type of Item' 
                    name='type'                    
                    onChange={onHandleTypeChange}
                    options={itemTypes.map(type => ({id: type.id, value: type.name["en-GB"]}))}
                />

                <SelectField 
                    placeholder='Item condition' 
                    name='condition'                    
                    onChange={onHandleConditionChange}
                    options={[{id: "0", value: "New"},{id: "1", value: "Used - Good"},{id: "2", value: "Used - Worn"},{id: "3", value: "Used - Needs some TLC"}]}
                />

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