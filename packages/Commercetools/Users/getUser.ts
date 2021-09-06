import { LoggedInUserClient } from "../Clients/APIClient";
import { Me } from "./Me";
import { UserType } from "./UserType";


const getMeRequest = () => {
  return LoggedInUserClient.me()
  .get()
  .execute(); 
};

export const getMe = async () => {

  try {
    const response = await getMeRequest();
    if (!!response?.body?.id) {

      let userType = getUserType(response.body.companyName);
      let postCode = response.body.addresses.length ? response.body.addresses[0].postalCode : '';
      
      const me: Me = {
        email: response.body.email,
        userId: response.body.firstName,
        postCode: postCode,
        commerceToolsId: response.body.id,
        id: response.body.title,
        userType: userType,
        linkedChild: userType == 'parent' ? response.body.companyName : null,
        version: response.body.version
      }

      return me;
    }
    return null;
  } catch (e) {
    return null;
  } 
};

export const getUserType = (companyName:string | undefined) : UserType => {

    // Using company name as link to child (Parent acc) OR as Retailer business name (Retailer acc)
    // Yes.. this is a hack!
    if (!!companyName && companyName.indexOf('child') > -1)
    {
        return 'parent'
    }
    return 'child';
}



/*const literal: UserType  = 'child'
const method = (val: UserType) => {
  if (val === 'parent') ... // val is 'parent'
  else ... // val is 'bar'
}*/
