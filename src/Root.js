import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Rates from "./components/Rates";

export default class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Graphql/Apollo Playground</Text>
        <Rates />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center"
  }
});
