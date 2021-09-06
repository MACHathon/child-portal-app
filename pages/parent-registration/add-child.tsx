import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import AddChildForm from "@/components/parent-registration/add-child-form/add-child-form";
import TitleField from "@/components/shared-components/text-fields/title-field";
import { Child } from "types/child";
import { getMe } from "packages/Commercetools/Users/getUser";
import React, { useEffect, useState } from "react";
import { Me } from "packages/Commercetools/Users/Me";

const AddChild: NextPage = (): JSX.Element => {
  const router = useRouter();

  const [me, setMe] = React.useState<Me | null>(null);

  useEffect(() => {
    (async () => {
      let me = await getMe();
      setMe(me);
      console.log("me");
      console.log(me);
    })();
  }, []);

  const registerNewChild = async (child: Child) => {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/addChild`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: child.username,
          pin: child.pin,
          name: child.name,
          parentVersion: me?.version,
          parentId: me?.commerceToolsId,
          parentPostcode: me?.postCode
        }),
      }
    );

    console.log(rawResponse);

    if (rawResponse.status == 200 || rawResponse.status == 201) {
      router.push("/parent-dashboard");
    }
  };

  return (
    <Box
      d="flex"
      flexDirection="column"
      alignItems="center"
      margin="5% auto 0 auto"
    >
      <TitleField fontSize="34px" color="#66B8EC">
        Add a child to your account
      </TitleField>
      <Box width="450px" height="450px">
        <AddChildForm registerNewChild={registerNewChild} />
      </Box>
    </Box>
  );
};

export default AddChild;
