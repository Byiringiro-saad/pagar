import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";

//features
import colors from "../features/colors";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  const goWelcome = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.span}>Pagar</Text>
        </Text>
        <Image source={require("../../assets/images/woman.png")} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.nav}>
          <Pressable onPress={goToLogin}>
            <Text style={[styles.link, styles.active]}>Sign in</Text>
          </Pressable>
          <Pressable onPress={goToSignup}>
            <Text style={styles.link}>Sign up</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={handleEmail}
            placeholder="Enter email or mobile number"
            placeholderTextColor={colors.grayish}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={handlePassword}
            placeholder="Enter password"
            placeholderTextColor={colors.grayish}
          />
          <View style={styles.login}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    paddingTop: 40,
  },
  top: {
    width: "100%",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flex: 0.6,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.grayish,
    marginBottom: 40,
  },
  span: {
    color: colors.green,
  },
  nav: {
    width: 350,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  link: {
    color: colors.green,
    marginRight: 30,
    fontSize: 16,
    paddingBottom: 10,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: colors.green,
  },
  form: {
    width: 350,
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 45,
    color: colors.dark,
    backgroundColor: colors.white,
    paddingStart: 15,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  login: {
    width: "100%",
    height: 45,
    backgroundColor: colors.green,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: colors.white,
  },
});
