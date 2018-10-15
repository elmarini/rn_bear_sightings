import React, { Component } from 'react';
import RootStack from '~/navigation/RootNavigator'
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView
} from 'react-native'

export default class App extends Component<Props> {
  render() {
    return (
        <RootStack />
    );
  }
}
