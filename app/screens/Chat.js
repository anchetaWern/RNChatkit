import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";

export default class Chat extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Chat screen starter</Text>
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
  body: {
    flex: 9
  },
  scroll_container: {
    paddingBottom: 20
  },
  messages: {
    flex: 8,
    flexDirection: "column",
    padding: 8
  },
  current_user_msg: {
    backgroundColor: "#439bff",
    alignSelf: "flex-end",
    alignItems: "flex-end"
  },
  current_user_msg_text: {
    color: "#fff"
  },
  current_user_username: {
    opacity: 0
  },

  other_user_msg: {
    backgroundColor: "#f6f8fa",
    alignSelf: "flex-start",
    alignItems: "flex-start"
  },
  other_user_msg_text: {
    color: "#333"
  },
  other_user_username: {
    color: "#484848"
  },
  message_box: {
    flex: 0.1,
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    justifyContent: "space-between"
  },
  username: {
    marginTop: 15
  },
  username_text: {
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 5
  },
  msg_body: {
    flex: 10,
    padding: 8,
    borderRadius: 10,
    maxWidth: 250
  },
  typing_indicator: {
    padding: 5
  },
  typing_indicator_text: {
    fontSize: 10,
    color: "#ccc"
  },
  text_field: {
    height: 40,
    flex: 8
  },
  button_container: {
    flex: 2,
    alignSelf: "center",
    alignItems: "flex-end"
  },
  send_button_text: {
    color: "#0064e1",
    fontWeight: "bold",
    fontSize: 16
  }
});
