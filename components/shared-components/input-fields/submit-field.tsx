import { Input } from "@chakra-ui/react"
import { NextPage } from "next"

interface Props {
    value?: string
}

const SubmitField: NextPage<Props>= ({ value }): JSX.Element => {

    return(
        <Input 
            height='70px'
            width='100%'
            borderRadius='10px'
            padding='24px 32px'
            margin='12px auto'
            bg='#66B8EC'
            color='white'
            boxShadow='m'
            _hover={{ bg: "#2f5a74" }}
            type='submit'
            value={value}
        />
    )
}

export default SubmitField