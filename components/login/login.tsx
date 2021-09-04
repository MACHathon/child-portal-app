import React, { useState, useEffect } from "react";
import { LoggedInUserClient } from "../../packages/Commercetools/Clients/APIClient";
import { Box, Image, Text } from "@chakra-ui/react";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import ConfirmButton from "@/components/shared-components/buttons/confirm-button";
import { useRouter } from "next/router";
import ImageFooter from "../shared-components/image-footer/image-footer";
import LoginRoleSwitch from "./login-role-switch";
import { RoleSwitchState } from "./roleSwitchState";
import Link from "next/link";
import { getMe } from "packages/Commercetools/Users/getUser";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const { asPath } = useRouter();

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isWaiting, setIsWaiting] = React.useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const [isParent, setIsParent] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      let me = await getMe();

      if (!!me) {
        console.log(me);
        setIsWaiting(false);
        if (me?.userType == "child") {
          window.location.href = "/kid-dashboard";
        } else {
          window.location.href = "/parent-dashboard";
        }
      } else {
        setIsWaiting(false);
      }
    })();
  }, []);

  const handleLoginClick = () => {
    (async () => {
      const rawResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (rawResponse.status != 200) {
        setIsError(true);
      } else {
        const content = await rawResponse.json();

        if (!!content?.access_token) {
          setIsWaiting(false);

          let me = await getMe();

          if (me?.userType == "child") {
            window.location.href = "/kid-dashboard";
          } else {
            window.location.href = "/parent-dashboard";
          }
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

  const handleRoleChange = (toRole: RoleSwitchState) => {
    if (toRole == "parent") {
      setIsParent(true);
    } else {
      setIsParent(false);
    }
  };

  return (
    <>
      {isWaiting ? (
        <h1>Loading spinner here...</h1>
      ) : isLoggedIn ? (
        <h1>Logged in</h1>
      ) : (
        <Box d="flex" flexDirection="column" width="100%">
          <Box zIndex="20">
            <LoginRoleSwitch handleRoleChange={handleRoleChange} />
            <TextInputField
              isPassword={false}
              onChange={handleUsernameChange}
              placeholder={isParent ? "Your Email address" : "Your ID"}
            />
            <TextInputField
              isPassword={true}
              onChange={handlePasswordChange}
              placeholder={isParent ? "Your Password" : "Your PIN number"}
            />
            <ConfirmButton onClick={handleLoginClick}>Login</ConfirmButton>
            {isError ? <div>Invalid credentials</div> : null}
            <Text
              align="center"
              paddingTop="2"
              _hover={{ textColor: "#2f5a74" }}
            >
              <Link href="/register">
                No account? Ask your parent to register here!
              </Link>
            </Text>
          </Box>
          <ImageFooter />
        </Box>
      )}
    </>
  );
};

export default Login;
