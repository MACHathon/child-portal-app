import { LoggedInUserClient } from "../Clients/APIClient";

export const getInventory = async (retailerCommercetoolsId: string) => {
  return await LoggedInUserClient.productProjections()
    .search()
    .get({
      queryArgs: {
        markMatchingVariants: false,
        filter:
          'variants.attributes.assigned-to:"a2f74fcd-7cbc-45f6-b790-e3322bf554f3"',
      },
    })
    .execute();
};


export const getChildDonatedHistory = async (childUserId: string) => {
  return await LoggedInUserClient.productProjections()
    .search()
    .get({
      queryArgs: {
        markMatchingVariants: false,
        filter:
          `variants.attributes.child-id:"${childUserId}"`,
      },
    })
    .execute();
};

