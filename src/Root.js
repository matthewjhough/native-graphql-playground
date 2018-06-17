import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Button } from "react-native-elements";
import AppNavigation from "./AppNavigation";

export default class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to RSI Trackr, Lorem Ipsum.</Text>
      </View>
    );
  }
}

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
