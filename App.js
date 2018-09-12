import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "./app/screens/Login";
import Users from "./app/screens/Users";
import Chat from "./app/screens/Chat";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the starter project</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
