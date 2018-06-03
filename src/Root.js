import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Rates from "./components/Rates";
import { Header, Button } from "react-native-elements";
import { createStackNavigator } from "react-navigation";

class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          style={{
            alignSelf: "stretch",
            width: 200
          }}
          backgroundColor={"#4682b4"}
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Rates")}
          title="See Currency Rates"
        />
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Home: {
      screen: Root,
      navigationOptions: {
        title: "RSI Trackr",
        headerTitleStyle: {
          color: "#fff",
          alignSelf: "center",
          textAlign: "center",
          width: "90%"
        },
        headerStyle: {
          display: "flex",
          backgroundColor: "#173d6a"
        }
      }
    },
    Rates: {
      screen: Rates,
      navigationOptions: {
        title: "Currency",
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
          textAlign: "center",
          width: "72%"
        },
        headerStyle: {
          backgroundColor: "#173d6a"
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center"
  }
});

/* 
  <Header
    leftComponent={{ icon: "menu", color: "#fff" }}
    centerComponent={{ text: "RSI Trackr", style: { color: "#fff" } }}
    rightComponent={{ icon: "home", color: "#fff" }}
    outerContainerStyles={{
      backgroundColor: "#173d6a",
      width: "100%",
      marginTop: 10,
      position: "absolute",
      top: 10
    }}
    innerContainerStyles={{ paddingTop: 0 }}
  />
*/
