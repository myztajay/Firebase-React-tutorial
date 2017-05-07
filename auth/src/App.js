import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Firebase } from './Firebase';
import { Header } from './components/common';


class App extends Component {

  compoentWillMount(){
    Firebase;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <Text>hello</Text>
      </View>
    )
  }
}

export default App
