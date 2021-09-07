import { ChangeEvent } from "react";
import { NextPage } from "next";
import { Box, Input, Text, Image } from "@chakra-ui/react";

interface Props {
    onImageUploadHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const UploadImage: NextPage<Props>= ({ onImageUploadHandler }) => {

    return(
        <Box 
            d='flex'
            justifyContent='center'
            alignItems='center'
            bg='transparent'
            position='relative'
            borderRadius='20px'
            border='5px dashed white'
            width='302px'
            height='302px'
        >          
            <Box
                position='absolute'
                zIndex='1'
                d='flex'
                flexDirection='column'
                alignItems='center'
            >
                <Image src='../../icons/image-upload.png' alt='upload' width='80px' height='80px' />
                <Text
                    fontFamily='Raleway'
                    color='white'
                    fontSize='24'
                    width='200px'
                    textAlign='center'
                    marginTop='10px'
                    lineHeight='1'
                >
                    Click or Drop to upload photo
                </Text>
            </Box>
            <Input 
                cursor='pointer'
                textAlign='right'
                position='relative'
                opacity='0'
	            zIndex='2'
                type="file" 
                id='file' 
                accept="image/*" 
                onClick={() => onImageUploadHandler }
            />   
        </Box>
    )
}

export default UploadImage;