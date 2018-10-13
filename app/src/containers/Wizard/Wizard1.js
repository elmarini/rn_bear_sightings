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

export default class Wizard1 extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('~/assets/introDave.png')}
          style={styles.dave}
        />
        <Image
          source={require('~/assets/clouds.png')}
          style={styles.clouds}
        />
        <Image
          source={require('~/assets/sun.png')}
          style={styles.sun}
        />
        <Bubble
          text="This is Dave and he needs your help."
          anchor={{ x: '4.5%', y: '28%' }}
          height="20%"
          width="90%"
        />
        <Header>
          <ProgressBar
            progress={20}
            style={styles.progressBar}
          />
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('~/assets/iconLeftarrowWhite.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </Header>
        <NextButton
          text="Get Started"
          style={styles.nextButton}
          onPress={() => this.props.navigation.navigate('Wizard2')}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.robinsEggBlue
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
