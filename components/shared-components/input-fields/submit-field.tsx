import { Input } from "@chakra-ui/react"
import { NextPage } from "next"

interface Props {
    value?: string
    bgColor: string
}

const SubmitField: NextPage<Props>= ({ value, bgColor }): JSX.Element => {

    return(
        <Input 
            cursor='pointer'
            textAlign='center'
            fontWeight='700'
            height='70px'
            width='100%'
            borderRadius='10px'
            padding='24px 32px'
            margin='12px auto'
            bg={ bgColor }
            border='none'
            color='white'
            boxShadow='m'
            _hover={{ bg: "#2f5a74" }}
            type='submit'
            value={value}
        />
    )
}

export default SubmitField