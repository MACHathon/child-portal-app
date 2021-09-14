import { Text, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { ChangeEvent, Fragment } from "react";

import DonateChackbox from "./donate-chackbox";

interface Props {
    checkedOption: any
    setCheckedOption: ( name: boolean )  => any
}

const deliveryOptions: { name: string }[] = [  
    { name: 'to post (i will pay delivery costs)' },
    { name: 'to post (if retailer pays delivery costs)' },
    { name: 'to drop off locally ( within 5 miles )' },
    { name: 'drop off ( within 20 miles )' },
    { name: 'for someone to come and collect' }
]


const DeliveryChackBoxes: NextPage<Props> = ({ checkedOption, setCheckedOption }): JSX.Element => {

    const onHandleCheck = (e: ChangeEvent<HTMLInputElement>): void => {
        setCheckedOption({...checkedOption, [e.target.name] : e.target.checked });
    }

    return (
        <Box 
            marginTop='30px'
            marginBottom='30px'
            d='flex'
            flexDirection='column'
        >
            <Text
                fontFamily='Raleway'
                fontSize='22px'
                fontWeight='700'
                color='#FFFFFF'
                marginBottom='15px'
            >
                I am happy:
            </Text>
            <Fragment>
                {
                    deliveryOptions.map((item: any, index: number) => {
                        return (
                            <DonateChackbox 
                                key={ index }
                                name={item.name} 
                                label={item.name}
                                checked={checkedOption[item.name]} 
                                onHandleCheck={onHandleCheck}
                            />
                        )
                    })
                }        
            </Fragment>
        </Box>
    )
}

export default DeliveryChackBoxes;