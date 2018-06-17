import { createStackNavigator, StackNavigator } from "react-navigation";
import DrawerNavigation from "./stacks/DrawerNavigation";

const PrimaryNav = createStackNavigator(
  {
    drawerStack: { screen: DrawerNavigation }
  },
  // default config for all screens
  {
    headerMode: "none",
    title: "RSI Trackr",
    initialRouteName: "drawerStack"
  }
);

export default PrimaryNav;
