import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Header from '../components/Header';

export default class Users extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="Users">
          {this.props.userHasLoggedIn && (
            <TouchableOpacity onPress={this.props.leavePresenceRoom}>
              <View style={styles.leave_button}>
                <Text style={styles.leave_button_text}>Logout</Text>
              </View>
            </TouchableOpacity>
          )}
        </Header>

        <View style={styles.body}>
          {this.props.users.length == 0 && (
            <View style={styles.activity}>
              <ActivityIndicator size="large" color="#05a5d1" />
              <Text style={styles.activity_text}>Loading users...</Text>
            </View>
          )}

          {this.props.users.length > 0 && (
            <FlatList
              data={this.props.users}
              renderItem={this.renderItem}
              keyExtractor={(item) => {
                return item.id.toString();
              }}
            />
          )}
        </View>
      </View>
    );
  }

  renderItem = ({ item }) => {
    let online_style = item.is_online ? 'online' : 'offline';

    return (
      <TouchableHighlight
        onPress={() => {
          console.log('now beginning chat...');
          this.props.beginChat(item);
        }}
        underlayColor="#f3f3f3"
        style={styles.list_item}>
        <View style={styles.list_item_body}>
          <View style={[styles.online_indicator, styles[online_style]]} />

          <Text style={styles.username}>{item.name}</Text>
        </View>
      </TouchableHighlight>
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
  activity: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  activity_text: {
    fontSize: 14,
    color: '#484848',
  },
  body: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list_item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  list_item_body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  online_indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  online: {
    backgroundColor: '#3ec70f',
  },
  offline: {
    backgroundColor: '#ccc',
  },
  username: {
    marginLeft: 10,
    fontSize: 16,
  },
});
