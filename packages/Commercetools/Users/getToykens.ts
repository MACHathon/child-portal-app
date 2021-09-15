const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://valtech.europe-west1.talon.one";

const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey = "32a6b48f1925bc1056d3fdb52188ba2a10ff269a56e7aab8398d2505b8d8dfc3"//process.env.NEXT_PUBLIC_TALONONE_API_KEY ?? "";
api_key_v1.apiKeyPrefix = "ApiKey-v1";
const integrationApi = new TalonOne.IntegrationApi();

export const getToykenBalence = async (childCommerceToolsId: string) => {
  return await integrationApi.getCustomerInventory(childCommerceToolsId, {
    loyalty: true,
  });
};
