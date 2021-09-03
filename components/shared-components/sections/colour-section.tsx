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
            position='relative'
            width='100%'
            height='652px' 
            fontFamily='Raleway'
            padding={6} 
            bg={ bgColour }
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                width: '12px',
              },
              '&::-webkit-scrollbar-track': {
                width: '11px',
                background: '#5091BA'
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#ACD9F0',
                borderRadius: '50px',
              },
            }}
        >
            { children }
        </Box>
    )
}

export default ColourSection