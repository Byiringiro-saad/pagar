import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//features
import colors from "../features/colors";

//pages
import Index from "../pages";
import Login from "../pages/login";
import Signup from "../pages/signup";

//routes
const screens = {
  Index: {
    screen: Index,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
};

//stack navigator
const navigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    title: "Pagar",
    headerStyle: {
      backgroundColor: colors.white,
    },
  },
});

export default createAppContainer(navigator);