import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

//features
import colors from "../features/colors";

export default function Index({ navigation }) {
  const goToAuth = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/background.png")}
        resizeMethod="resize"
      >
        <Text style={styles.title}>
          Switch to {"\n"} <Text style={styles.span}>Pagar</Text>
        </Text>
        <Image source={require("../../assets/images/one.png")} />
        <Text style={styles.text}>
          Reference site about Lorem Ipsum, giving {"\n"} information on its
          origins, as well as a random
        </Text>
        <Pressable onPress={goToAuth}>
          <View style={styles.button}>
            <Image
              source={require("../../assets/icons/apply.png")}
              style={styles.icon}
            />
            <Text style={styles.iconText}>Apply for a loan</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.white,
  },
  background: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.dark,
  },
  span: {
    color: colors.green,
  },
  text: {
    color: colors.dark,
    textAlign: "center",
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
  },
  icon: {
    marginRight: 10,
  },
  iconText: {
    color: colors.white,
  },
});
