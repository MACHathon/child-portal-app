import { Box, Input, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';

interface Props {
    name: string
    label: string
    checked: any
    onHandleCheck: (e: ChangeEvent<HTMLInputElement>) => void
}

const DonateChackbox: NextPage<Props> = ({ name, label, checked, onHandleCheck }): JSX.Element => {

    return(
        <Box
            d='flex'
            alignItems='center'
            marginTop='5px'
        >       
            <Input 
                appearance='none'
                d='inline-block'
                width='24px'
                height='24px'
                padding='4px'
                backgroundClip='content-box'
                border=' 2px solid #FFFFFF'
                marginRight='5px'
                cursor='pointer'
                css={{
                    '&:checked': {
                        backgroundColor: '#FFFFFF',
                    },
                    '&:focus': {
                        outline: 'none'
                    },
                  }}
                name={name}
                type="checkbox"
                checked={checked || false }
                onChange={onHandleCheck} />
            <Text
                fontFamily='Raleway'
                fontSize='20px'
                fontWeight='400'
                color='#FFFFFF'
                paddingLeft='10px'
            >
                { label }
            </Text>
        </Box>
    )
}

export default DonateChackbox;