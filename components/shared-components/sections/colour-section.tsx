import { Box } from "@chakra-ui/react"
import { NextPage } from "next"
import { ReactNode } from "react"

interface Props {
    bgColour: string;
    children: ReactNode
}

const ColourSection: NextPage<Props> = ({ bgColour, children }): JSX.Element => {
    return (
        <Box
            width='100%'
            height='652px' 
            fontFamily='Roboto Condensed'
            padding={6} 
            bg={ bgColour }
        >
            { children }
        </Box>
    )
}

export default ColourSection