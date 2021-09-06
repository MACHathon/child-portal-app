import { Box } from "@chakra-ui/react";
import {
  CustomFields,
  FieldContainer,
  TypeReference,
} from "@commercetools/platform-sdk/dist/generated/models/type";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AnonUserClient } from "../../packages/Commercetools/Clients/APIClient";
import ConfirmButton from "../shared-components/buttons/confirm-button";
import ImageFooter from "../shared-components/image-footer/image-footer";
import TextInputField from "../shared-components/input-fields/text-input-field";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  const router = useRouter();

  const [parentEmail, setParentEmail] = React.useState<string>("");
  const [parentPassword, setParentPassword] = React.useState<string>("");
  const [parentName, setParentName] = React.useState<string>("");
  const [postCode, setPostcode] = React.useState<string>("");

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
            companyName: `not-linked-child@toyken.org`, // Should use a custom field but for times sake hacking it
            addresses: [
              {
                postalCode: postCode,
                country: "UK"     // Future TODO country input. 
              },
            ]
          },
        })
        .execute();

      if (parentResponse.statusCode == 201) {
        console.log(parentResponse);
        // Login as parent
        const loginResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/api/login`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: parentEmail,
              password: parentPassword,
            }),
          }
        );

        if (loginResponse.status == 200 || loginResponse.status == 201) {
          //router.push("parent-registration/welcome");
          window.location.href = "/parent-registration/welcome";
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

  const handlePostCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostcode(event.target.value);
  };

  return (
    <>
      {isWaiting ? (
        <h1>Loading spinner here...</h1>
      ) : signUpcomplete ? (
        <h1>Logged in</h1>
      ) : (
        <Box d="flex" flexDirection="column" width="100%">
          <Box zIndex="20">
            <TextInputField
              isPassword={false}
              onChange={handleParentNameChange}
              placeholder="Your name (Parent)"
            />
             <TextInputField
              isPassword={false}
              onChange={handlePostCodeChange}
              placeholder="Your Postal code"
            />
            <TextInputField
              isPassword={false}
              onChange={handleParentEmailChange}
              placeholder="Email address (Parent)"
            />
            <TextInputField
              isPassword={true}
              onChange={handleParentPasswordChange}
              placeholder="Password (Parent)"
            />
            <ConfirmButton onClick={handleSignUpClick}>Register</ConfirmButton>
            {isError ? <div>Invalid credentials</div> : null}
          </Box>
          <ImageFooter />
        </Box>
      )}
    </>
  );
};

export default SignUp;
