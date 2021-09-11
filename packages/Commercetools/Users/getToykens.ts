const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://valtech.europe-west1.talon.one";

const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey = process.env.NEXT_PUBLIC_TALONONE_API_KEY ?? "";
api_key_v1.apiKeyPrefix = "ApiKey-v1";
const integrationApi = new TalonOne.IntegrationApi();

export const getToykenBalence = async (childCommerceToolsId: string) => {
  return await integrationApi.getCustomerInventory(childCommerceToolsId, {
    loyalty: true,
  });
};
