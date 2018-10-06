import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/Components/Common';
import { firebaseConfig } from './firebaseconfig';
import LoginForm from './src/Components/LoginForm';


export default class App extends React.Component {

  state = {
    loggedIn: null,
  }
  componentWillMount() {
    console.log(firebaseConfig, 'firebaseonfig')
    firebase.initializeApp(firebaseConfig)
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <View style={styles.logoutButtonStyle}>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />
      
      default: 
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size='large' />
          </View>
        )
    }
    
    
    return <LoginForm />;
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonStyle: {
    flexDirection: 'row',
    paddingTop: 5
  }
};