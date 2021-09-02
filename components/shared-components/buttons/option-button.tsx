import { Box } from "@chakra-ui/react"
import { NextPage } from "next"
import { ReactElement } from "react"

interface Props {
    onClick: () => void
    icon: ReactElement
    color: string
}

const OptionButton: NextPage<Props> = ({ color, icon, onClick }): JSX.Element => {

    return (
        <Box
            color={ color }
            onClick={onClick}
        >
            <Box
                fontSize='30px'
                width='32px'
                height='32px'         
            >
                { icon }
            </Box>
        </Box>

    )
}

export default OptionButton