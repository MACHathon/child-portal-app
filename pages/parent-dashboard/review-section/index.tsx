import { NextPage } from "next"

import TitleField from "@/components/shared-components/text-fields/title-field";
import { Box } from "@chakra-ui/layout";
import ReviewHeader from "@/components/shared-components/review-section-header/review-header";
import ReviewList from "@/components/shared-components/sections-list/review-list";
import ColorNotification from "@/components/shared-components/sections/color-notification";
import { useEffect, useState } from "react";

const reviewItems = [
    {
        id: "1",
        name: "Transformer White/Blue",
        image: "../../images/toy-example-image.png",
        type: "Plastic Toy",
        condition: "New",
        deliver: true,
        collection: true,
        drop_locally: true
    },
    {
        id: "2",
        name: "Transformer Optimus Prime",
        image: "../../images/toy-example-image.png",
        type: "Plastic Toy",
        condition: "New",
        deliver: false,
        collection: true,
        drop_locally: true
    },
    {
        id: "3",
        name: "Transformer Optimus Prime",
        image: "../../images/toy-example-image.png",
        type: "Plastic Toy",
        condition: "New",
        deliver: true,
        collection: false,
        drop_locally: false
    },
    {
        id: "4",
        name: "Transformer White/Blue",
        image: "../../images/toy-example-image.png",
        type: "Plastic Toy",
        condition: "Used",
        deliver: false,
        collection: true,
        drop_locally: true
    },
]

const ReviewSection: NextPage = (): JSX.Element => {

    const [ colorNotification, setColorNotification ] = useState<boolean>(false);
    const [ notificationType, setNotificationType ] = useState<string>('')

    useEffect(() => {
        if(colorNotification){
            const timer = setTimeout(() => {
                setColorNotification(false);
            }, 2500);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [colorNotification]);

    const onRejectHandler = (type: string) => {
        setColorNotification(true)
        setNotificationType(type)
    }

    const onAddHandler = (type: string) => {
        setColorNotification(true)
        setNotificationType(type)
    }

    return (
        <Box
            margin='50px 0'
        >
            <TitleField 
                fontSize='56px'
                color='#333333'
            >
                Review Offers
            </TitleField>
            <ReviewHeader />
            {
                colorNotification && <ColorNotification  notificationType={notificationType}/>
            }        
            <ReviewList 
                items={reviewItems} 
                onRejectHandler={onRejectHandler}
                onAddHandler={onAddHandler}
            />
        </Box>
    )
}

export default ReviewSection