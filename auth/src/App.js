import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase  from './Firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';


class App extends Component {
  
  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    )
  }
}

export default App
