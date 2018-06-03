import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { List, ListItem, Button } from "react-native-elements";

const query = gql`
  query rates {
    rates(currency: "USD") {
      name
      currency
    }
  }
`;

class Rates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: []
    };
    this.getRates = this.getRates.bind(this);
    this.clearRates = this.clearRates.bind(this);
  }

  getRates() {
    var { rates } = this.props.data;
    this.setState(
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              rates
            },
            () => {
              this.setState({
                loading: false
              });
            }
          );
        }, 500);
      }
    );
  }

  clearRates() {
    this.setState({
      rates: []
    });
  }

  render() {
    if (this.props.data.loading)
      return (
        <View>
          <Text>Fetching...</Text>
        </View>
      );
    else if (this.state.loading) {
      return (
        <View style={{ maxHeight: 500, alignSelf: "stretch" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 20,
              alignSelf: "stretch"
            }}
          >
            <Button
              raised
              style={{
                alignSelf: "stretch",
                width: 200
              }}
              loading
              backgroundColor={"#4682b4"}
              style={styles.button}
              onClick={this.getRates}
              onPress={this.getRates}
              title="Loading..."
            />
            <Button
              raised
              style={{
                alignSelf: "stretch",
                width: 200
              }}
              backgroundColor={"#ff4c4c"}
              style={styles.button}
              onClick={this.clearRates}
              onPress={this.clearRates}
              title="Clear"
            />
          </View>
        </View>
      );
    }
    return (
      <View style={{ maxHeight: 500, alignSelf: "stretch" }}>
        <ScrollView>
          <List style={styles.scrollView}>
            {this.state.rates &&
              this.state.rates.map((item, i) => {
                return (
                  <ListItem
                    key={i}
                    title={item.name + " -- " + item.currency}
                  />
                );
              })}
          </List>
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "stretch"
          }}
        >
          <Button
            raised
            style={{
              alignSelf: "stretch",
              width: 200
            }}
            backgroundColor={"#4682b4"}
            style={styles.button}
            onClick={this.getRates}
            onPress={this.getRates}
            title="Show Currency"
          />
          <Button
            raised
            style={{
              alignSelf: "stretch",
              width: 200
            }}
            backgroundColor={"#ff4c4c"}
            style={styles.button}
            onClick={this.clearRates}
            onPress={this.clearRates}
            title="Clear"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  scrollView: {
    maxHeight: 300
  }
});

export default graphql(query)(Rates);
