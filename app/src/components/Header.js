import React from 'react'
import  { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const Header = ({ children }) => (
  <View style={styles.header}>
    <SafeAreaView />
    {children}
  </View>
)

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 0,
    maxHeight: 80,
    width: '100%',
  }
})

export default Header
