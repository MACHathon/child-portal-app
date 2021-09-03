import React, { useState, useEffect } from "react";
import { LoggedInUserClient } from "../../packages/Commercetools/Clients/APIClient";
import { Box, Image, Text } from "@chakra-ui/react";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import ConfirmButton from "@/components/shared-components/buttons/confirm-button";
import { useRouter } from 'next/router';
import ImageFooter from "../shared-components/image-footer/image-footer";
import LoginRoleSwitch from "./login-role-switch";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {

  const router = useRouter();
  const { asPath } = useRouter()

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isWaiting, setIsWaiting] = React.useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  useEffect(() => {
    LoggedInUserClient.me()
      .get()
      .execute()
      .then((response: any) => {
        if (!!response?.body?.id) {
          console.log(response);
          router.push('/dashboard');
        }
      })
      .catch((error) => {
        console.log(error);
        setIsWaiting(false);
      });
  }, []);

  const handleLoginClick = () => {
    (async () => {
      const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (rawResponse.status != 200) {
        setIsError(true);
      } else {
        const content = await rawResponse.json();

        if (!!content?.access_token) {
          router.push('/dashboard');
          setIsWaiting(false);
        }
      }
    })();
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
      ) : isLoggedIn ? (
        <h1>Logged in</h1>
      ) : (
        <Box
          d='flex'
          flexDirection='column'
          width='100%'
        >
          <LoginRoleSwitch />
          <TextInputField isPassword={false} onChange={handleUsernameChange} placeholder="Your ID" />
          <TextInputField isPassword={true} onChange={handlePasswordChange} placeholder="Your PIN number" />
          <ConfirmButton onClick={handleLoginClick}>Login</ConfirmButton>
          {isError ? <div>Invalid credentials</div> : null}
          <ImageFooter />
        </Box>
      )}
    </>
  );
};

export default Login;
