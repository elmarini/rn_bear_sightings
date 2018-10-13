import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

export default class Search extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Search</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 12,
    color: 'black'
  }
})
