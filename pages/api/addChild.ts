// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import SdkAuth from "@commercetools/sdk-auth";
import { SecureApiClient } from "../../packages/Commercetools/Clients/SecureApiClient";
import { getMe } from "packages/Commercetools/Users/getUser";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (
    req.body.username &&
    req.body.pin &&
    req.body.name &&
    req.body.parentId &&
    req.body.parentVersion
  ) {
    let latestUserId = await SecureApiClient.customObjects()
      .get({ queryArgs: { where: 'key="latestId"' } })
      .execute();

    console.log("Latest ID: " + latestUserId);

    let currentId = +latestUserId?.body?.results[0].value;
    let newIdNum = currentId + 1;
    let newId = "00" + newIdNum;

    // Add child
    let response = await SecureApiClient.me()
      .signup()
      .post({
        body: {
          email: `${req.body.username}-child@toyken.org`,
          title: newId,
          password: req.body.pin,
          firstName: req.body.name,
          companyName: req.body.username, // Child username stored is company name field - hack
          addresses: [
            {
              postalCode: req.body.parentPostcode ?? '',
              country: "UK"     // Future TODO country input. 
            },
          ]
        },
      })
      .execute();

    console.log(response);

    if (response.statusCode == 201 || response.statusCode == 200) {
      let updateLatestChildIdResponse = await SecureApiClient.customObjects()
        .post({
          body: {
            container: "child_meta_data",
            key: "latestId",
            value: newId,
          },
        })
        .execute();

      console.log("Update latest child ID");
      console.log(updateLatestChildIdResponse);

      if (
        updateLatestChildIdResponse.statusCode == 201 ||
        updateLatestChildIdResponse.statusCode == 200
      ) {
        let linkChildResponse = SecureApiClient.customers()
          .withId({ ID: req.body.parentId })
          .post({
            body: {
              version: req.body.parentVersion,
              actions: [
                {
                  action: "setCompanyName",
                  companyName: `${req.body.username}-child@toyken.org`,
                },
              ],
            },
          })
          .execute();
        
        console.log("link child result")
        console.log(linkChildResponse);

        res.status(200).json({ data: "success" });
      }
    }
  }
}
