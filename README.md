# RNChatkit
A chat app created with React Native and Chatkit.

You can view the full tutorial at [https://pusher.com/tutorials/chat-react-native-chatkit](https://pusher.com/tutorials/chat-react-native-chatkit)

### Prerequisites

- React Native development environment or [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- Expo [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) or [iOS client app](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)

## Getting Started

1. Clone the repo:

```
git clone https://github.com/anchetaWern/RNChatkit.git
```

2. Install the app dependencies:

```
yarn install
```

3. Install the server dependencies:

```
cd server
npm install
```

4. Setup a [Chatkit account](https://pusher.com/chatkit) and create a new Chatkit app instance. 
Also create a new user in that app instance, and create a general room. Take note of its ID.

5. Update the `App.js` file and `server/server.js` file with your instance locator ID and Chatkit app secret.

6. Update the `server/server.js` file with the ID of the general room you created earlier, and the internal IP assigned
by your router to your machine. You can also use [ngrok](https://ngrok.com/) if you want to test with someone outside your network (Note: use https when using ngrok).

```
const presenceRoomId = YOUR_GENERAL_ROOM_ID
const chatServer = "http://YOUR_INTERNAL_IP:3000/users";
```

7. Inside the `server` folder, run the server:

```
node server.js
```

8. Login to your Expo account in the Expo client app.

9. Find the project or scan QR code in the client app and run the chat app:

```
expo start
```


## Built With

* [React Native](http://facebook.github.io/react-native/)
* [Chatkit](https://pusher.com/chatkit)
