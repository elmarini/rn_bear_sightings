import React, { Component } from 'react';
import RootStack from '~/navigation/RootNavigator'
import {
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'

export default class App extends Component<Props> {
  render() {
    return (
          <KeyboardAvoidingView
            style={{ flex: 1, borderWidth: 10, backgroundColor: 'red' }}
            behaviour="padding"
          >
           <View
             style={{ flex: 0, backgroundColor: 'green', flexGrow: 0}}
           >
           <TextInput
             style={{
               marginTop:400,
               backgroundColor: 'white',
               height: 60
             }}
           />
       </View>
         </KeyboardAvoidingView>


    );
  }
}

/* <RootStack /> */
