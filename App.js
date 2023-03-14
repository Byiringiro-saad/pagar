import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";

//features
import colors from "./src/features/colors";

//navigator
import Navigator from "./src/routes/stack";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
