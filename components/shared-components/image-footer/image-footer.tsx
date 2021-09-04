import { Image } from "@chakra-ui/react"
import { NextPage } from "next"

const ImageFooter: NextPage = (): JSX.Element => {
    
    return (
        <Image 
            position='absolute'
            bottom='0'
            left='0'
            src='../../images/mountain-scene.svg' 
            alt='footer' 
            width='100%'
            zIndex="10"             
        />
    )

}

export default ImageFooter