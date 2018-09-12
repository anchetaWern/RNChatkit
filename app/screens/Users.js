import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";

export default class Users extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Users screen starter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignSelf: "stretch"
  },
  leave_button: {
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF"
  },
  leave_button_text: {
    color: "#FFF",
    fontSize: 16
  },
  activity: {
    flex: 1,
    alignItems: "center",
    marginTop: 10
  },
  activity_text: {
    fontSize: 14,
    color: "#484848"
  },
  body: {
    flex: 9,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  list_item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  list_item_body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  online_indicator: {
    width: 10,
    height: 10,
    borderRadius: 10
  },
  online: {
    backgroundColor: "#3ec70f"
  },
  offline: {
    backgroundColor: "#ccc"
  },
  username: {
    marginLeft: 10,
    fontSize: 16
  }
});
