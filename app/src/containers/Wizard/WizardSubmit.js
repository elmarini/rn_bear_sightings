import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Picker,
  KeyboardAvoidingView
} from 'react-native'
import Header from '~/components/Header'
import ProgressBar from '~/components/ProgressBar'
import colors from '~/themes/colors'
import api from '~/services/api'

export default class WizardSubmit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: null,
      zip: null,
      type: null,
      notes: null,
      isPickerVisible: false
    }
  }

  onChange = (state) => (text) => {
    return this.setState({
      [state]: text
    })
  }

  onTogglePicker = () => {
    return this.setState({
      isPickerVisible: !this.state.isPickerVisible
    })
  }

  onSubmit = () => {
    api.post({
      quantity: this.state.quantity,
      zip: this.state.zip,
      type: this.state.type,
      notes: this.state.notes
    })
    return this.props.navigation.navigate('Search')
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, borderWidth: 10 }}
        behaviour="padding"
      >
       <View
         style={{ flex: 1, backgroundColor: 'green', flexGrow: 0}}
       >


        {/*
        <View style={styles.daveBG}>
          <Image
            source={require('~/assets/submitSighting.png')}
            style={styles.dave}
          />
        <Text style={styles.bubbleText}>
          Daves are a rare breed, but because they are team players, they are often found together.
        </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.numberLabel}>
            Number of Daves
          </Text>
          <Text style={styles.zipLabel}>
            Zip Code
          </Text>
          <TextInput
            style={styles.number}
            onChangeText={this.onChange('quantity')}
            value={this.state.quantity}
          />
          <TextInput
            style={styles.zip}
            onChangeText={this.onChange('zip')}
            value={this.state.zip}
          />
        </View>

        <View style={styles.pickerText}>
          <Text>
            {this.state.type || 'Type of Dave'}
          </Text>
          <TouchableOpacity onPress={this.onTogglePicker}>
              <Image source={require('~/assets/iconCaret.png')} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.notes}
          onChangeText={this.onChange('notes')}
          value={this.state.notes}
          placeholder="Notes"
        />
      <View style={{ height: 60}} />
        <TouchableHighlight
          onPress={() =>{}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Submit Dave Sighting
          </Text>
        </TouchableHighlight>
        <Header>
          <ProgressBar
            progress={90}
            style={styles.progressBar}
          />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Wizard4')}>
            <Image
              source={require('~/assets/iconLeftarrowWhite.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </Header>
        {this.state.isPickerVisible &&
         <View style={styles.pickerWrapper}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.type}
              onValueChange={this.onChange('type')}
            >
              <Picker.Item label="Life Saver" value="lifesaver" />
              <Picker.Item label="Racer" value="racer" />
              <Picker.Item label="Reporter" value="reporter" />
              <Picker.Item label="Buddy" value="buddy" />
            </Picker>
            <TouchableOpacity
              onPress={this.onTogglePicker}
              style={styles.pickerCloseButton}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        }

        */}


        <TextInput
          style={{
            marginTop:400,
            backgroundColor: 'white',
            height: 60
          }}
          onChangeText={this.onChange('quantity')}
          value={this.state.quantity}
        />
    </View>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'red'
  },
  dave: {
    marginTop: '14%'
  },
  daveBG: {
    paddingTop: '14%',
    backgroundColor: colors.milkChocolate
  },
  bubbleText: {
    position: 'absolute',
    marginTop: '22%',
    padding: '14%',
  },
  picker: {
    height: '100%',
    width: '100%',
  },
  pickerText: {
    height: 60,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2
  },
  pickerCloseButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    fontSize: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    height: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: 'white'
  },
  number: {
    flex: 0,
    width: '38%',
    height: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 14,
    borderWidth: 1,
    borderColor: colors.lightGray
  },
  numberLabel: {
    marginTop: 12,
    position: 'absolute',
    marginLeft: 12,
    color: colors.pinkishGrey
  },
  zip: {
    flex: 1,
    width: '62%',
    height: '100%',
    paddingLeft: 12,
    paddingTop: 14,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: colors.lightGray
  },
  zipLabel: {
    position: 'absolute',
    left: '38%',
    marginTop: 12,
    marginLeft: 12,
    color: colors.pinkishGrey
  },
  notes: {
    backgroundColor: 'white',
    height: 118,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 22,
    paddingBottom: 22,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.lightGray
  },
  text: {
    fontSize: 12,
    color: 'black'
  },
  button: {
    position: 'absolute',
    backgroundColor: colors.lightishGreen,
    borderRadius: 5,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '94%',
    left: '3%',
    bottom: '5%'
  },
  progressBar: {
    height: 10
  },
  arrow: {
    marginLeft: 10,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  }
})
