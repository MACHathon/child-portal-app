import { NextPage } from "next";

import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";
import { Box } from "@chakra-ui/react";
import SectionCard from "@/components/dashboard/parent-dashboard/parent-sections/sections/rewards-section/section-card";
import SectionLayout from "@/components/shared-components/layouts/section-layout";
import DonateHistorySection from "@/components/dashboard/kid-dashboard/dashboard-sections/donate-history-section/donate-history-section";
import { getData } from "utils/getData";
import { useEffect } from "react";
import React from "react";
import { Me } from "packages/Commercetools/Users/Me";
import { ProductProjection } from "@commercetools/platform-sdk";
import { getChildDonatedHistory } from "packages/Commercetools/Items/getItemInventory";
import { getMe } from "packages/Commercetools/Users/getUser";

interface Props {
    items: any;
}

interface HistoryItem {
    id: string,
    name: string,
    comment: string,
    image?: string,
    toykens?:string,
    done: boolean,
    matched: boolean
}

const DonateHistory: NextPage<Props> = ({ items }):JSX.Element => {

    const [me, setMe] = React.useState<Me | null>(null);
    const [history, setHistory] = React.useState<HistoryItem[]>([]);
  
    useEffect(() => {
      (async () => {
        let me = await getMe();
        setMe(me);
        console.log(me);
        let toysDonated = await getChildDonatedHistory(me?.id as string);

        let history: HistoryItem[] = [];

        console.log(toysDonated.body.results);

        if (toysDonated.body.results.length) {
            toysDonated.body.results.forEach(toy => {

                let isDone: boolean = false;
                let isMatched: boolean = false;
                //let comment = "Recieved - Thank you!";

                // For MVP we haven't allowed retailer to select delivery option preference. So for now will just state retailer to arrange delivery
                let comment = "We've found this item a new home! The new owner will be in contact with your parent to arrange delivery/collection!";

                if (toy?.masterVariant?.attributes?.length)
                {
                    if (toy?.masterVariant?.attributes.filter(i => i.name == "assigned-to").length && toy?.masterVariant?.attributes.filter(i => i.name == "assigned-to")[0].value != 'unassigned')
                    {
                        isMatched = true;

                        let assignedToRetailerName =  toy?.masterVariant?.attributes.filter(i => i.name == "assigned-to-name")[0].value ?? "";
                        let assignedToRetailerPostcode =  toy?.masterVariant?.attributes.filter(i => i.name == "assigned-to-postcode")[0].value ?? "";

                        if (toy?.masterVariant?.attributes.filter(i => i.name == "received-by-retailer").length)
                        {
                            isDone = true;
                        } else {
                            // Assigned and waiting
                            
                            if (toy?.masterVariant?.attributes.filter(i => i.name == "selected-delivery-option").length)
                            {
                                let selectedDelivery = toy?.masterVariant?.attributes.filter(i => i.name == "selected-delivery-option")[0].value;
                                if (selectedDelivery == "post") {
                                    comment = `Please post to ${assignedToRetailerName} address: ${assignedToRetailerPostcode}. When the retailer marks the item as received Toykens will be added to your account!`;
                                } else if  (selectedDelivery == "drop off locally") {
                                    comment = `Please drop off to ${assignedToRetailerName} address: ${assignedToRetailerPostcode}. When the retailer marks the item as received Toykens will be added to your account!`;
                                } else if  (selectedDelivery == "deliver") {
                                    comment = `Please drop off to ${assignedToRetailerName} address: ${assignedToRetailerPostcode}. When the retailer marks the item as received Toykens will be added to your account!`;
                                } else {
                                    // collection
                                    comment = `Please wait for ${assignedToRetailerName} to collect your item(s). When the retailer marks the item as received Toykens will be added to your account!`;
                                }
                            }
                        }                        
                    } else {
                        // not assigned to retailer - actions
                        comment = "Awaiting match - We will email your parent when a match has been made!"                        
                    }
                    
                }

                let toyHistory: HistoryItem = {
                    id: toy.id,
                    comment: comment,
                    name: toy.name["en-GB"], // TODO
                    done: isDone,
                    matched: isMatched,
                    image: "../../images/toy-example-image.png"
                };

                history.push(toyHistory);

            })
        }     
    
        setHistory(history);
      })();
    }, []);

    return (
        <DashboardLayout>
            <SectionLayout>
                <Box flex='1'>
                    <SectionCard 
                        bgColor='#ACD9F0' 
                        image='../../icons/teddy-bear.svg' 
                        title='Donate Items' 
                        context='Donate Toys, Games and more for Toykens!' 
                        btnColor='#66B8EC'
                    />
                </Box>
                <DonateHistorySection items={history}/>
            </SectionLayout>
        </DashboardLayout>
    )
}

export default DonateHistory;

export const getStaticProps = async () => {

    const data = await getData('donate-items-data.json');
  
    if(!data) {
        return { 
            redirect: {
                destination: '/kid-dashboard'
            }
         }
    }
  
    return{
        props: { items: data.items }
    }
}

