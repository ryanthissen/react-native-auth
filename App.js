import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/Components/Common';
import { firebaseConfig } from './firebaseconfig';
import LoginForm from './src/Components/LoginForm';


export default class App extends React.Component {
  componentWillMount() {
    console.log(firebaseConfig, 'firebaseonfig')
    firebase.initializeApp(firebaseConfig)
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
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
