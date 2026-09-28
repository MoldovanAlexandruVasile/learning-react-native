import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { Colors } from "../../constants/styles";
import FlatButton from "../ui/FlatButton";
import AuthForm, { AuthFormValues, InvalidCredentials } from "./AuthForm";

type Props = {
  isLogin?: boolean;
  onAuthenticate?: (credentials: { email: string; password: string }) => void;
};

function AuthContent({ isLogin = false, onAuthenticate }: Props) {
  const [credentialsInvalid, setCredentialsInvalid] =
    useState<InvalidCredentials>({
      email: false,
      password: false,
      confirmEmail: false,
      confirmPassword: false,
    });

  function switchAuthModeHandler() {
    // TODO: Connect this action to navigation between login and signup.
  }

  function submitHandler(credentials: AuthFormValues) {
    const email = credentials.email.trim();
    const confirmEmail = credentials.confirmEmail.trim();
    const password = credentials.password.trim();
    const confirmPassword = credentials.confirmPassword.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }

    onAuthenticate?.({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
