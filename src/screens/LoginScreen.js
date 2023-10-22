import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { backendURL } from "../utils/setEnv";
import useAuthActions from "../hooks/useAuth";
import { renderJSX } from "../utils/helpers";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import Btn from "../widgets/Button";
import Input from "../widgets/Input";
import useConnections from "../hooks/useConnections";
import { NavLink } from "react-router-dom/";

// return GitHub URL Authentication link
export const githubAuthCall = (inapp) =>
  `${backendURL}/auth/github${renderJSX(inapp, inapp, "")}`;
// return Google URL Authentication link
export const googleAuthUrl = (inapp) =>
  `${backendURL}/auth/google${renderJSX(inapp, inapp, "")}`;

export const linkedinAuthUrl = (inapp = "") =>
  `${backendURL}/auth/linkedin${renderJSX(inapp, inapp, "")}`;

// return Facebook URL Authentication link
export const facebookAuthUrl = (inapp = "") => `${backendURL}/auth/sjultra`;

export const sjultraAuthUrl = (inapp = "") =>
  `${backendURL}/auth/sjultra${inapp}`;

// return Microsoft URL Authentication link
export const microsoftAuthUrl = (userid) =>
  `${backendURL}/auth/microsoft${renderJSX(userid, `?userid=` + userid, "")}`;
// return Microsoft URL Authentication link
export const twitterAuthUrl = (userid) => `${backendURL}/auth/twitter`;

const inputStyles =
  "background:whiteborder:1px solid var(--borders)border-radius:0.4emmargin-top:0.4emheight:40pxfont-size:13px";

const LoginScreen = () => {
  // Selector
  const { auth, handleUserLogin } = useAuthActions();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setLoginState((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));

  // close modal

  const [submitting, setSubmitting] = useState(false);

  const submit = (e) => {
    e?.preventDefault();
    try {
      setSubmitting(true);
      console.log("login state", loginState);
      handleUserLogin(loginState);
    } catch (err) {
      console.log("err occured", err);
    } finally {
      setTimeout(() => {
        setSubmitting(false);
      }, 1500);
    }
  };

  // check if authenticated
  if (auth?.token) {
    return <Redirect to={`/dashboard`} />;
  }

  return (
    <Flex
      align={'center'}
      w={{ base: "full", lg: "900px" }}
      m={{ base: "20px 0", lg: "30px auto" }}
    >
      <Box
        bgColor={"#d9d9d9"}
        h='100vh'
        display={{ base: "none", lg: "block" }}
      >
        <Img src="/assets/onboard-img.png" alt="onboarding-image" h='100vh' />
      </Box>
      <Box as='form' onSubmit={submit} p={{ base: "20px", lg: "40px" }}>
        <Text
          className="poppins"
          color={"#090909"}
          fontWeight={700}
          fontSize={"24px"}
        >
          Welcome back
        </Text>
        <Text
          className="poppins"
          color={"#666666"}
          fontWeight={400}
          fontSize={{ base: "14px", lg: "16px" }}
          maxW={{ base: "full", lg: "500px" }}
        >
          Sign in to Access your account
        </Text>
        <Box mt="30px">
          <Box>
            <Input
              label={"Email"}
              type="text"
              placeholder="Email"
              w={{ base: "full", lg: "500px" }}
              color="#090909"
              h="45px"
              name="email"
              onChange={handleChange}
              mt="10px"
              fontSize={"14px"}
              p="10px"
              borderRadius={"6px"}
              _placeholder={{ color: "#D0D5DD", fontSize: "12px" }}
            />
          </Box>
          <Box mt="20px">
            <Input
              label={"Password"}
              type="password"
              placeholder="******"
              w={{ base: "full", lg: "500px" }}
              color="#090909"
              name="password"
              h="45px"
              mt="10px"
              onChange={handleChange}
              fontSize={"14px"}
              p="10px"
              borderRadius={"6px"}
              _placeholder={{ color: "#D0D5DD", fontSize: "12px" }}
            />
          </Box>
          <Text
            className="poppins"
            color={"#666666"}
            fontWeight={400}
            fontSize={"14px"}
            mt="10px"
          >
            By clicking on Continue, you accept our{" "}
            <Text as={"span"} color={"#FE4600"}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text as="span" color={"#FE4600"}>
              Privacy Policy
            </Text>
          </Text>
        </Box>
        <Flex
          align={"center"}
          flexDir={{ base: "column", lg: "row" }}
          justify={"center"}
          gap={{ base: "10px", lg: "20px" }}
          mt={{ base: "40px", lg: "80px" }}
        >
          <Box
            as="button"
            p="10px 50px"
            border={"1px solid #FE4600"}
            borderRadius={"4px"}
            color="#FE4600"
            bg="white"
            fontSize={"16px"}
          >
            Go back
          </Box>
          <Box
            as="button"
            p="10px 50px"
            borderRadius={"4px"}
            bgColor={"#FE4600"}
            color="#fff"
            fontSize={"16px"}
            loading={submitting}
            type='submit'
          >
            Continue
          </Box>
        </Flex>
        <Flex align={"center"} justify={"center"} gap="6px" mt="10px">
          <Text
            className="poppins"
            fontWeight={400}
            fontSize={"14px"}
            color={"#666666"}
          >
            Don't have an account?
          </Text>
          <NavLink to="/signup">
            <Text as="button" color={"#FE4600"}>
              Sign Up
            </Text>
          </NavLink>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LoginScreen;
