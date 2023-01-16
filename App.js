import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";

//features
import colors from "./src/features/colors";

//pages
import Index from "./src/pages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Index />
    </SafeAreaView>
  );
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
