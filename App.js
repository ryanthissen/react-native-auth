import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Components/Common';
import firebase from 'firebase';


export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDu67L-YOOs_kOjbZ_umnADDJIwE_xVKlI",
      authDomain: "auth-grider-be884.firebaseapp.com",
      databaseURL: "https://auth-grider-be884.firebaseio.com",
      projectId: "auth-grider-be884",
      storageBucket: "auth-grider-be884.appspot.com",
      messagingSenderId: "414375333618"
    })
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
