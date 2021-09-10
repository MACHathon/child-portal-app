import { Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    fontSize: string;
    color: string
    start?: boolean
}

const TitleField:NextPage<Props> = ({ children, fontSize, color, start }) :JSX.Element => {

    return (
        <Text
            fontFamily='Raleway'
            fontSize={ fontSize }
            fontWeight='700'
            color={ color }
            textAlign={ start ? 'start' : 'center'}
            marginBottom='2%'
        >
            { children }
        </Text>
    )

}

export default TitleField