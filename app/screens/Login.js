import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login screen starter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#333"
  },
  text_field: {
    width: 200,
    height: 40,
    borderColor: "#bfbfbf",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});
