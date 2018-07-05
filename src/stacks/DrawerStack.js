import { DrawerNavigator, createDrawerNavigator } from "react-navigation";
import Root from "../Root";
import Rates from "../containers/Rates";
import Scanner from "../containers/Scanner";
import LocationTracker from "../containers/Location";

// main burger menu navigation, authenticated screens
const DrawerStack = createDrawerNavigator({
  Home: { screen: Root },
  Rates: { screen: Rates },
  Scanner: { screen: Scanner },
  Location: { screen: LocationTracker }
});

export default DrawerStack;
