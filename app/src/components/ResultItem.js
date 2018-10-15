import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import colors from '~/themes/colors'

export default ({
  type,
  note
}) => {
  let source = null
  switch(type) {
    case 'racer':
      source = require('~/assets/iconRacerdave.png')
      break
    case 'reporter':
      source = require('~/assets/iconReporterDave.png')
      break
    case 'buddy':
      source = require('~/assets/iconBuddyDave.png')
      break
    default:
      source = require('~/assets/iconLifesaver.png')
  }
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.avatar}
        source={source}
      />
      <View style={styles.column}>
        <Text style={styles.title}>
          {type}
        </Text>
        <Text style={styles.subtitle}>
          {note}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  avatar: {
    height: 60,
    width: 60,
    marginRight: 12
  },
  column: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 14,
    marginBottom: 12
  },
  subtitle: {
    color: colors.warmGray,
    fontSize: 12
  }
})
