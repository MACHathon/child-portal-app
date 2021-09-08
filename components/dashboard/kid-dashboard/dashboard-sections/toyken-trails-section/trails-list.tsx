import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { Fragment } from "react"
import { RiArrowRightLine } from 'react-icons/ri';

import TextIconButton from "@/components/shared-components/buttons/text-and-icon-btn"

interface Props {
    trails: any;
}

const TrailsList: NextPage<Props> = ({ trails }): JSX.Element => {
    return (
        <Fragment>
        {
           trails.map((trail: any )=> {
               return (
                   <Box
                       key={ trail.id }
                       d='flex'
                       justifyContent='space-between'
                       alignItems='center'
                       height='150px'
                       width='100%'
                       bg='white'
                       borderRadius='20px'
                       padding='25px 35px'
                       marginBottom='2%'
                   >
                       <Box
                           fontFamily='Raleway'
                           fontSize='18px'
                           d='flex'
                           flexDirection='column'
                           justifyContent='flex-start'
                       >
                           <Text
                                border='1px solid #333333'
                                borderRadius='10px'
                                padding='10px'
                                cursor='pointer'
                           >
                               { trail.target }
                           </Text>
                           <Box
                                marginTop='10px'
                                d='flex'
                           >
                               <Text
                                    border='1px solid #333333'
                                    borderRadius='10px'
                                    padding='10px'
                                    cursor='pointer'
                                    marginRight='15px'
                                >
                                    { trail.stops } stops
                                </Text>
                                    <Text
                                    border='1px solid #333333'
                                    borderRadius='10px'
                                    padding='10px'
                                    cursor='pointer'
                                >
                                    { trail.away } mile away from home
                                </Text>
                           </Box>
                       </Box>
                       <Box
                           d='flex'
                           alignItems='center'
                           width='25%'
                           justifyContent='flex-end'
                       >
                            <TextIconButton onClick={() => {}} icon={<RiArrowRightLine />}  bgColour='#66B8EC' width='100%' >Lets Go</TextIconButton>
                       </Box>
                   </Box>
               )
           })
       }  
    </Fragment>
    )
}

export default TrailsList