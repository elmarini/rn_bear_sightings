import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import colors from '~/themes/colors'

export default ({
  style,
  progress
}) => (
    <View style={style}>
      <View style={styles.base} />
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
)

const styles = StyleSheet.create({
  base: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.transparentGreen
  },
  progress: {
    position: 'absolute',
    height: '100%',
    backgroundColor: colors.lightishGreen
  }
})
