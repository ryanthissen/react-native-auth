import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/Components/Common';
import { firebaseConfig } from './firebaseconfig';


export default class App extends React.Component {
  componentWillMount() {
    console.log(firebaseConfig, 'firebaseonfig')
    firebase.initializeApp(firebaseConfig)
  };

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
