import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  RefreshControl,
} from 'react-native';

import Header from '../components/Header';

export default class Chat extends React.Component {
  render() {
    const { refreshing = false } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header text={this.props.chatWithUser}>
          {this.props.inChatRoom && (
            <TouchableOpacity onPress={this.props.backToUsers}>
              <View style={styles.leave_button}>
                <Text style={styles.leave_button_text}>Leave</Text>
              </View>
            </TouchableOpacity>
          )}
        </Header>

        <View style={styles.body}>
          <ScrollView
            style={styles.messages}
            contentContainerStyle={styles.scroll_container}
            ref={this.props.setScrollViewRef}
            refreshControl={
              <RefreshControl
                refreshing={this.props.refreshing}
                onRefresh={this.props.loadPreviousMessages}
              />
            }>
            <FlatList data={this.props.messages} renderItem={this.renderItem} />
          </ScrollView>

          {this.props.chatWithUserIsTyping && (
            <View style={styles.typing_indicator}>
              <Text style={styles.typing_indicator_text}>
                {this.props.chatWithUser} is typing...
              </Text>
            </View>
          )}

          <View style={styles.message_box}>
            <TextInput
              style={styles.text_field}
              multiline={true}
              onChangeText={this.props.updateMessage}
              value={this.props.message}
              placeholder="Type your message..."
            />

            <View style={styles.button_container}>
              {this.props.inChatRoom && (
                <TouchableOpacity onPress={this.props.sendMessage}>
                  <View style={styles.send_button}>
                    <Text style={styles.send_button_text}>Send</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  renderItem = ({ item }) => {
    let box_style = item.isCurrentUser ? 'current_user_msg' : 'other_user_msg';
    let username_style = item.isCurrentUser
      ? 'current_user_username'
      : 'other_user_username';

    return (
      <View key={item.key} style={styles.msg}>
        <View style={styles.msg_wrapper}>
          <View style={styles.username}>
            <Text style={[styles.username_text, styles[username_style]]}>
              {item.username}
            </Text>
          </View>
          <View style={[styles.msg_body, styles[box_style]]}>
            <Text style={styles[`${box_style}_text`]}>{item.msg}</Text>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignSelf: 'stretch',
  },
  leave_button: {
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  leave_button_text: {
    color: '#FFF',
    fontSize: 16,
  },
  body: {
    flex: 9,
  },
  scroll_container: {
    paddingBottom: 20,
  },
  messages: {
    flex: 8,
    flexDirection: 'column',
    padding: 8,
  },
  current_user_msg: {
    backgroundColor: '#439bff',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  current_user_msg_text: {
    color: '#fff',
  },
  current_user_username: {
    opacity: 0,
  },

  other_user_msg: {
    backgroundColor: '#f6f8fa',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  other_user_msg_text: {
    color: '#333',
  },
  other_user_username: {
    color: '#484848',
  },
  message_box: {
    flex: 0.1,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    justifyContent: 'space-between',
  },
  username: {
    marginTop: 15,
  },
  username_text: {
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 5,
  },
  msg_body: {
    flex: 10,
    padding: 8,
    borderRadius: 10,
    maxWidth: 250,
  },
  typing_indicator: {
    padding: 5,
  },
  typing_indicator_text: {
    fontSize: 10,
    color: '#ccc',
  },
  text_field: {
    height: 40,
    flex: 8,
  },
  button_container: {
    flex: 2,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  send_button_text: {
    color: '#0064e1',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
