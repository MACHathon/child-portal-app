import type { NextPage } from 'next';

import HeaderLeyout from '@/components/shared-components/layouts/header-layout';
import ClientInfo from '../../../shared-components/client-info/client-info';
import MessagesNotification from '@/components/dashboard/parent-dashboard/parent-header/header-element/messages-notification';
import { useEffect } from 'react';
import React from 'react';
import { Me } from 'packages/Commercetools/Users/Me';
import { getMe } from 'packages/Commercetools/Users/getUser';

const ParentHeader: NextPage = ():JSX.Element => {

    const [me, setMe] = React.useState<Me | null>(null);

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
            <ClientInfo message={`Welcome ${me?.userId}`}/>
            <MessagesNotification />
        </HeaderLeyout>
    )
}

export default ParentHeader