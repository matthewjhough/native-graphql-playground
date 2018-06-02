import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
// import { View } from "react-native"; //
import { graphql } from "react-apollo";
import gql from "graphql-tag";

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
    this.setState({
      loading: true
    });
    new Promise(resolve => {
      var { rates } = this.props.data;
      this.setState({
        rates
      });
      resolve();
    }).then(res => {
      console.log("loading complete");
    });
  }

  clearRates() {
    this.setState({
      rates: []
    });
  }

  render() {
    console.log("Rendered!");
    return (
      <View style={{ maxHeight: 450 }}>
        <ScrollView style={styles.scrollView}>
          {this.state.rates &&
            this.state.rates.map((item, i) => {
              return (
                <View key={i}>
                  <Text key={i}>{item.currency + " " + item.name}</Text>
                </View>
              );
            })}
        </ScrollView>
        <View style={{ display: "flex", flexDirection: "row", width: 350 }}>
          <Button
            style={styles.button}
            onClick={this.getRates}
            onPress={this.getRates}
            title="Rates"
          />
          <Button
            color={"red"}
            width={150}
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
    width: 350
  }
});

export default graphql(query)(Rates);
