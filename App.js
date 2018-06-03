import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import Root from "./src/Root";

const httpLink = new HttpLink({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent("native-playground", () => App);
