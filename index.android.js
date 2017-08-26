import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class teste extends Component {
  render () {
    return (
      <View>
        <Text>PASSAMOS DO SEU LADO</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('teste', () => teste);
