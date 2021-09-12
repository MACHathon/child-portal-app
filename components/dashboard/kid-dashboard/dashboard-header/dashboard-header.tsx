import type { NextPage } from "next";

import HeaderLeyout from "@/components/shared-components/layouts/header-layout";
import ClientInfo from "../../../shared-components/client-info/client-info";
import ToykenInfo from "./header-elements/toyken-info";
import { useEffect } from "react";
import React from "react";
import { Me } from "packages/Commercetools/Users/Me";
import { getMe } from "packages/Commercetools/Users/getUser";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import { TypeChildDashboard } from "types/TypeChildDashboard";

const DashboardHeader: NextPage = (): JSX.Element => {
  const [me, setMe] = React.useState<Me | null>(null);
  const [data, isloading] = useContentfulData<TypeChildDashboard>(
    "4Y6odArfh6UqlTsBMfh9Ir"
  );

  useEffect(() => {
    (async () => {
      let me = await getMe();
      setMe(me);
      console.log("me");
      console.log(me);
    })();
  }, []);

  return (
    <HeaderLeyout>
      <ClientInfo
        image="../../images/clara-profile.png"
        message={`${data?.fields?.helloLabel} ${me?.userId} (#${me?.id})!`}
      />
      <ToykenInfo />
    </HeaderLeyout>
  );
};

export default DashboardHeader;
