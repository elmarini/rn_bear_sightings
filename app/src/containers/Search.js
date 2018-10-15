import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native'
import api from '~/services/api'
import colors from '~/themes/colors'
import metrics from '~/themes/metrics'
import Bubble from '~/components/Bubble'
import ResultItem from '~/components/ResultItem'


export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: null,
      results: []
    }
  }
  onSearch = () => {
    const data = api.search(this.state.term)
    this.setState({
      results: data
    })
  }

  onChange = () => (text) => {
    this.setState({
      term: text
    })
  }

  componentDidMount() {
    const data = api.get()
    this.setState({
      results: data
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.daveBg}>
          <Image
            source={require('~/assets/searchDave.png')}
            style={styles.dave}
            resizeMode="contain"
          />
          <Bubble
            text="Successfully added to the list! Search by zip code to see other Daves."
            anchor={{ x: '4.8%', y: '17.5%' }}
            height="38%"
            width="90%"
          />
        </View>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.search}
            onChangeText={this.onChange()}
            value={this.state.term}
            onBlur={this.onSearch}
          />
        </View>
          <Text style={styles.searchResultsText}>
            {this.state.term ? `RESULTS FOR "${this.state.term}"`: "SEARCH SOMETHING"}
          </Text>
        <View style={styles.resultsList}>
          <FlatList
            data={this.state.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ResultItem
                key={index}
                type={item.type}
                note={item.notes}
              />
            )}
          />
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dave: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  daveBg: {
    position: 'relative',
    width: '100%',
    height: metrics.screenWidth * 0.9,
    backgroundColor: colors.robinsEggBlue
  },
  bubbleText: {
    top: '28%',
    alignSelf: 'center'
  },
  text: {
    fontSize: 12,
    color: 'black'
  },
  search: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 35
  },
  searchWrapper: {
    position: 'relative',
    borderRadius: 24,
    backgroundColor: 'white',
    margin: 12,
    width: '96%',
    height: 48,
    alignSelf: 'center',
    alignItems: 'center'
  },
  searchResultsText: {
    color: colors.warmGray,
    fontSize: 12,
    marginTop: 15,
    marginBottom: 24,
    marginLeft: 12,
    marginRight: 12
  },
  resultsList: {
    flex: 1,
    backgroundColor: 'white',
    flexGrow: 1,
    paddingLeft: 12,
    paddingRight: 12
  }
})
