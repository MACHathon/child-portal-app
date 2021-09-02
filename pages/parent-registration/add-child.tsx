import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import AddChildForm from "@/components/parent-registration/add-child-form/add-child-form"
import TitleField from "@/components/shared-components/text-fields/title-field"
import { Child } from "types/child"

const AddChild: NextPage = (): JSX.Element => {

    const registerNewChild = (child: Child): void => {
        console.log(child)
    }

    return (
        <Box
            d='flex'
            flexDirection='column'
            alignItems='center'
            margin='5% auto 0 auto'
        >
            <TitleField
                fontSize='54px'
                color='#66B8EC'
            >
                Add a child to your account
            </TitleField>
            <Box
                width='450px'
                height='450px'
            >
                <AddChildForm registerNewChild={registerNewChild}/>
            </Box>    
        </Box>
    )
}

export default AddChild