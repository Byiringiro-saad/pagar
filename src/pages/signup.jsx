import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

//features
import colors from "../features/colors";

export default function Signup({ navigation }) {
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
          Signup to <Text style={styles.span}>Pagar</Text>
        </Text>
        <Text style={styles.sub_title}>Let's get you out of debts hell.</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.nav}>
          <Pressable onPress={goToLogin}>
            <Text style={styles.link}>Sign in</Text>
          </Pressable>
          <Pressable onPress={goToSignup}>
            <Text style={[styles.link, styles.active]}>Sign up</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={handleEmail}
            placeholder="Names"
            placeholderTextColor={colors.grayish}
          />
          <TextInput
            style={styles.input}
            onChangeText={handleEmail}
            placeholder="Email"
            placeholderTextColor={colors.grayish}
          />
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            onChangeText={handleEmail}
            placeholder="Mobile number"
            placeholderTextColor={colors.grayish}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={handlePassword}
            placeholder="Password"
            placeholderTextColor={colors.grayish}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={handlePassword}
            placeholder="Confirm Password"
            placeholderTextColor={colors.grayish}
          />
          <View style={styles.login}>
            <Text style={styles.loginText}>Signup</Text>
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
  },
  top: {
    width: "100%",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flex: 0.8,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.grayish,
    marginBottom: 15,
  },
  sub_title: {
    color: colors.grayish,
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
