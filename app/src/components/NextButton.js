import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import colors from '~/themes/colors'

export default ({
  style,
  onPress,
  text="Next"
}) => (
  <TouchableHighlight
    style={style}
    onPress={onPress}
  >
    <View style={styles.wrapper}>
      <Image
        source={require('~/assets/iconChevronRight.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightishGreen
  },
  image: {
    position: 'absolute',
    right: '5%',
  },
  text: {
    fontSize: 24,
    color: 'white',
  }
})
