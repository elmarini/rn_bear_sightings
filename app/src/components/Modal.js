import React from 'react'
import {
  Modal,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'
import colors from '~/themes/colors'

export default ({
  visible,
  onClose
}) => (
     <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={onClose}
      >
      <View style={styles.background}>
          <View style={styles.contents}>
            <Image
              source={require('~/assets/submittingSighting.png')}
              style={styles.dave}
            />
            <Text style={styles.text}>
              Submitting sighting
            </Text>
            <Image
              source={require('~/assets/loading.gif')}
              style={styles.loader}
            />
          </View>
        </View>
      </Modal>
)

const styles = StyleSheet.create({
  dave: {
    height: '50%',
    width: '100%'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 27
  },
  loader: {
    marginTop: 40,
    height: 50,
    width: 50
  },
  contents: {
    position: 'absolute',
    height: 400,
    width: '88%',
    alignSelf: 'center',
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center'
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.darkGray,
  }
})
