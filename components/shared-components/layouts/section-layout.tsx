import { ReactNode } from 'react';
import { NextPage } from 'next';

import { Box } from '@chakra-ui/layout';

interface Props {
    children: ReactNode
}

const SectionLayout: NextPage<Props> = ({ children }):JSX.Element => {

    return (
        <Box
            d='flex' 
            mt='2' 
            width='100%'
            margin='auto'
            overflow='hidden'
            borderRadius='10px'
        >
            { children }
        </Box>
    )

}

export default SectionLayout