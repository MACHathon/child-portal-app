import { ChangeEvent } from "react";
import { NextPage } from "next";
import { Box, TagLabel, Input } from "@chakra-ui/react";

interface Props {
    addImageHandler: (data: {image: string} ) => void;
}

const UploadImage: NextPage<Props> = ({ addImageHandler }) => {

    // const [ imageUrl, setImageUrl ] = useState<string>('')

    const onImageUploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
       console.log(e.target.files) 
    }

    return(
        <Box>
            <TagLabel htmlFor="file">            
                <Input type="file" id='file' placeholder='Upload image' accept="image/*" onChange={onImageUploadHandler}/>
            </TagLabel>              
        </Box>
    )
}

export default UploadImage;