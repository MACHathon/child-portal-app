import { Box } from "@chakra-ui/react";
import {
  CustomFields,
  FieldContainer,
  TypeReference,
} from "@commercetools/platform-sdk/dist/generated/models/type";
import React, { useState, useEffect } from "react";
import { AnonUserClient } from "../../packages/Commercetools/Clients/APIClient"
import ConfirmButton from "../shared-components/buttons/confirm-button";
import ImageFooter from "../shared-components/image-footer/image-footer";
import TextInputField from "../shared-components/input-fields/text-input-field";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  const [parentEmail, setParentEmail] = React.useState<string>("");
  const [parentPassword, setParentPassword] = React.useState<string>("");
  const [parentName, setParentName] = React.useState<string>("");

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const [signUpcomplete, setIsLoggedIn] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const handleSignUpClick = () => {
    (async () => {
      // Register Parent
      let parentResponse = await AnonUserClient.me()
        .signup()
        .post({
          body: {
            email: parentEmail,
            password: parentPassword,
            firstName: parentName,
            // Link the child
            companyName: `${username}-child@toyken.org`, // Should use a custom field but for times sake hacking it
          },
        })
        .execute();

      if (parentResponse.statusCode == 201) {
        console.log(parentResponse);

        // Register Child

        // Get an ID
        let latestUserId = await AnonUserClient.customObjects()
          .get({ queryArgs: { where: 'key="latestId"' } })
          .execute();

        let currentId = +latestUserId?.body?.results[0].value;
        let newId = "00" + currentId + 1;

        let response = await AnonUserClient.me()
          .signup()
          .post({
            body: {
              email: `${username}-child@toyken.org`,
              title: newId,
              password: password,
              firstName: username, // Should use a custom field but for times sake hacking it
            },
          })
          .execute();

        console.log(response);

        if (response.statusCode == 201) {
          setIsLoggedIn(true);
          setIsWaiting(false);
        } else {
          setIsWaiting(false);
          setIsError(true);
        }
      } else {
        setIsWaiting(false);
        setIsError(true);
      }
    })();
  };

  const handleParentNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParentName(event.target.value);
  };

  const handleParentEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParentEmail(event.target.value);
  };

  const handleParentPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParentPassword(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
       {isWaiting ? (
        <h1>Loading spinner here...</h1>
      ) : signUpcomplete ? (
        <h1>Logged in</h1>
      ) : (
        <Box
          d='flex'
          flexDirection='column'
          width='100%'
        >
           <Box zIndex="20">
            <TextInputField isPassword={false} onChange={handleParentNameChange} placeholder="Your name (Parent)" />
            <TextInputField isPassword={false} onChange={handleParentEmailChange} placeholder="Email address (Parent)" />
            <TextInputField isPassword={true} onChange={handleParentPasswordChange} placeholder="Password (Parent)" />
            <TextInputField isPassword={false} onChange={handleUsernameChange} placeholder="Username for your child" />
            <TextInputField isPassword={true} onChange={handlePasswordChange} placeholder="Pick a PIN number for your child" />
            <ConfirmButton onClick={handleSignUpClick}>Register</ConfirmButton>
            {isError ? <div>Invalid credentials</div> : null}
           </Box>
           <ImageFooter  /> 
        </Box>
    )}
    </>
  );
};

export default SignUp;
