import React, { useState, useEffect } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import ConfirmButton from "@/components/shared-components/buttons/confirm-button";
import { useRouter } from "next/router";
import ImageFooter from "../shared-components/image-footer/image-footer";
import LoginRoleSwitch from "./login-role-switch";
import { RoleSwitchState } from "./roleSwitchState";
import Link from "next/link";
import { getMe } from "packages/Commercetools/Users/getUser";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useContentfulData } from "../hooks/useContentfulData";
import { TypeChildHomepage } from "types/TypeChildHomepage";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const { asPath } = useRouter();

  const [contentfulData, isLoading] = useContentfulData<TypeChildHomepage>(
    "4cS7JUzLdGq5SLfiZ04kjq",
    "de-DE"
  );

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

          if (username.indexOf("@") > -1) {
            // Another hack because getMe isnt working - TODO Debug if time.
            window.location.href = "/parent-dashboard";
          } else {
            window.location.href = "/kid-dashboard";
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

  const handlePinChange = (value: string) => {
    setPassword(value);
    console.log(value);
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
      {isWaiting && !isLoading ? (
        <h1>Loading spinner here...</h1>
      ) : isLoggedIn ? (
        <h1>Logged in</h1>
      ) : (
        <Box d="flex" flexDirection="column" width="100%">
          <Box zIndex="20">
            <LoginRoleSwitch
              handleRoleChange={handleRoleChange}
              isParentSelected={isParent}
              parentLabel={contentfulData.fields?.parentSelectorLabel}
              childLabel={contentfulData.fields?.childSelectorLabel}
            />
            <TextInputField
              isPassword={false}
              onChange={handleUsernameChange}
              placeholder={
                isParent
                  ? contentfulData.fields?.emailInputLabel
                  : contentfulData.fields?.childIdLabel
              }
            />

            {isParent ? (
              <TextInputField
                isPassword={true}
                onChange={handlePasswordChange}
                placeholder={
                  isParent
                    ? contentfulData.fields?.passwordInputLabel
                    : contentfulData.fields?.pinInputLabel
                }
              />
            ) : (
              <div>
                <Text
                  align="center"
                  paddingTop="2"
                  paddingBottom="5"
                  _hover={{ textColor: "#2f5a74" }}
                >
                  {contentfulData.fields?.pinInputLabel}
                </Text>
                <HStack>
                  <PinInput onChange={handlePinChange}>
                    <PinInputField
                      style={{ width: "90px", fontSize: "40px" }}
                      height="90px"
                      backgroundColor="#e7e7e7"
                    />
                    <PinInputField
                      style={{ width: "90px", fontSize: "40px" }}
                      height="90px"
                      backgroundColor="#e7e7e7"
                    />
                    <PinInputField
                      style={{ width: "90px", fontSize: "40px" }}
                      height="90px"
                      backgroundColor="#e7e7e7"
                    />
                    <PinInputField
                      style={{ width: "90px", fontSize: "40px" }}
                      height="90px"
                      backgroundColor="#e7e7e7"
                    />
                  </PinInput>
                </HStack>
              </div>
            )}

            <ConfirmButton onClick={handleLoginClick}>
              {contentfulData.fields?.loginCtaLabel}
            </ConfirmButton>
            {isError ? (
              <div>{contentfulData.fields?.invalidCredentialsLabel}</div>
            ) : null}
            <Text
              align="center"
              paddingTop="2"
              _hover={{ textColor: "#2f5a74" }}
            >
              <Link href="/register">
                <span>{contentfulData.fields?.askYourParentsLabel}</span>
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
