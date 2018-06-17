import { DrawerNavigator, createDrawerNavigator } from "react-navigation";
import Root from "../Root";
import Rates from "../containers/Rates";
import Scanner from "../containers/Scanner";

// main burger menu navigation, authenticated screens
const DrawerStack = createDrawerNavigator({
  Home: { screen: Root },
  Rates: { screen: Rates },
  Scanner: { screen: Scanner }
});

export default DrawerStack;
