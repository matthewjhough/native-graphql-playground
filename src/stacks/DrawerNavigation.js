import React from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import DrawerStack from "./DrawerStack";

const styles = StyleSheet.create({
  menu: {
    padding: 10
  }
});

const DrawerNavigation = createStackNavigator(
  {
    drawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#173d6a" },
      title: "RSI Trackr",
      headerTitleStyle: {
        color: "#fff",
        alignSelf: "center",
        textAlign: "center",
        width: "75%"
      },
      headerLeft: (
        <View style={styles.menu}>
          <Text
            style={{ color: "white" }}
            onPress={() => {
              console.log(navigation);
              navigation.toggleDrawer();
            }}
          >
            Menu
          </Text>
        </View>
      ),
      headerTintColor: "white"
    })
  }
);

export default DrawerNavigation;
