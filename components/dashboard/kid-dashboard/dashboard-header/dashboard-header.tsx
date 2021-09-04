import type { NextPage } from 'next';

import HeaderLeyout from '@/components/shared-components/layouts/header-layout';
import ClientInfo from '../../../shared-components/client-info/client-info';
import ToykenInfo from './header-elements/toyken-info';


const DashboardHeader: NextPage = ():JSX.Element => {

    return (
        <HeaderLeyout>
            <ClientInfo image='../../images/clara-profile.png' message='Hello Clara! (#0066)'/>
            <ToykenInfo />          
        </HeaderLeyout>
    )
}

export default DashboardHeader