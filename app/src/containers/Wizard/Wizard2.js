import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import Header from '~/components/Header'
import ProgressBar from '~/components/ProgressBar'
import Bubble from '~/components/Bubble'
import NextButton from '~/components/NextButton'
import colors from '~/themes/colors'

export default class Wizard2 extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('~/assets/detectiveDaveBg.png')}
          style={styles.bg}
        />
        <Image
          source={require('~/assets/detectiveDave.png')}
          style={styles.dave}
        />
        <Bubble
          text="On an epic quest to discover his inner truth, Dave uncovered a new world where he was 'one Dave among many'."
          anchor={{ x: '4.5%', y: '16.5%' }}
          height="25%"
          width="93%"
        />
        <Header>
          <ProgressBar
            progress={40}
            style={styles.progressBar}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Wizard1')}>
            <Image
              source={require('~/assets/iconLeftarrowWhite.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </Header>
        <NextButton
          style={styles.nextButton}
          onPress={() => this.props.navigation.navigate('Wizard3')}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    bottom: '10%'
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.jungleGreen
  },
  dave: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%'
  },
  clouds: {
    position: 'absolute',
    top: '46%'
  },
  sun: {
    position:'absolute',
    top: '5%',
    right: 0,
  },
  nextButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '10%',
  },
  arrow: {
    marginLeft: 10,
    marginTop: 10
  },
  progressBar: {
    height: 10
  },
  text: {
    fontSize: 12,
    color: 'black'
  }
})
