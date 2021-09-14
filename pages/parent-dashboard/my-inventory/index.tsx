import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import HeaderLeyout from "@/components/shared-components/layouts/header-layout"
import ReviewHeader from "@/components/shared-components/review-section-header/review-header"
import ClientInfo from "@/components/shared-components/client-info/client-info"
import MessagesNotification from "@/components/dashboard/parent-dashboard/parent-header/header-element/messages-notification"
import ReviewList from "@/components/shared-components/sections-list/review-list"

const myItems = [
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

const MyInventory: NextPage = (): JSX.Element => {

    const onRejectHandler = (type: string) => {
       console.log(type)
    }

    const onAddHandler = (type: string) => {
        console.log(type)
    }

    return (
        <Box
            margin='50px 0'
        >
            <HeaderLeyout>
                <ClientInfo message='My Inventory' />
                <MessagesNotification />
            </HeaderLeyout>
            <ReviewHeader serachBar support/>
            <ReviewList 
                items={myItems} 
                onRejectHandler={onRejectHandler}
                onAddHandler={onAddHandler}
            />
        </Box>
    )
}

export default MyInventory