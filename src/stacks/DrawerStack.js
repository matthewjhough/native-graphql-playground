import { DrawerNavigator, createDrawerNavigator } from "react-navigation";
import Root from "../Root";
import Rates from "../components/Rates";

// main burger menu navigation
const DrawerStack = createDrawerNavigator({
  Home: { screen: Root },
  Rates: { screen: Rates }
});

export default DrawerStack;
