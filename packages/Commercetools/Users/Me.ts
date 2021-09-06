import { UserType } from "./UserType";

export type Me = {
    email: String,
    userId: String | undefined,
    postCode: String | undefined, 
    commerceToolsId: String,
    id: String | undefined,
    userType: UserType,
    linkedChild: String | null | undefined,
    version: number
  }