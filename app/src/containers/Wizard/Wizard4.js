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
          source={require('~/assets/sherlockDaveBg.png')}
          style={styles.bg}
        />
        <Image
          source={require('~/assets/sherlockDave.png')}
          style={styles.dave}
        />
        <Bubble
          text="Help Dave find other Daves so that they can collectively fight against unjust bank fees.."
          anchor={{ x: '4.5%', y: '16.5%' }}
          height="25%"
          width="93%"
        />
        <Header>
          <ProgressBar
            progress={80}
            style={styles.progressBar}
          />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Wizard3')}>
            <Image
              source={require('~/assets/iconLeftarrowWhite.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </Header>
        <NextButton
          style={styles.nextButton}
          onPress={() => this.props.navigation.navigate('WizardSubmit')}
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
    backgroundColor: colors.blueberry
  },
  dave: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0
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
