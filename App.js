import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";

//features
import colors from "./src/features/colors";

//pages
import Index from "./src/pages";
import Login from "./src/pages/login";
import Signup from "./src/pages/signup";

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Welcome" component={Index} />
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen name="Signup" component={Signup} />
//   </Stack.Navigator>
// );

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <StackNavigator />
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Index /> */}
      {/* <Login /> */}
      <Signup />
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
