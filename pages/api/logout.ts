// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import SdkAuth from "@commercetools/sdk-auth";
import { SecureApiClient } from "../../packages/Commercetools/Clients/SecureApiClient";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { 
      res.setHeader(
        "Set-Cookie",
        serialize("token", "", {
          path: "/",
          sameSite: "lax",
          domain: "www.toyken.org"
          //httpOnly: true, // OK to expose to the client
          //secure: true    // TODO when we have HTTPS i.e is not dev
        })
      );

      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"

      res.status(200).json({ data : "success" });  
}



