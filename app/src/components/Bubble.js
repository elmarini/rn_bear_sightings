import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

export default ({
  text,
  anchor,
  height,
  width
}) => (
  <View style={[styles.wrapper, { top: anchor.y, left: anchor.x, height, width }]}>
    <Image
      source={require('~/assets/bubbleVertical.png')}
      resizeMode="stretch"
      style={styles.image}
    />
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginBottom: '5%',
    paddingRight: '5%',
    paddingLeft: '5%'
  }
})
