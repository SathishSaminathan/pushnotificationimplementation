import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Details")}
          title="Click Here"
        />
      </View>
    );
  }
}
