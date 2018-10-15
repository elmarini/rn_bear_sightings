import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Wizard1 from '~/containers/Wizard/Wizard1'
import Wizard2 from '~/containers/Wizard/Wizard2'
import Wizard3 from '~/containers/Wizard/Wizard3'
import Wizard4 from '~/containers/Wizard/Wizard4'
import WizardSubmit from '~/containers/Wizard/WizardSubmit'
import Search from '~/containers/Search'

const navigationConfig = {
  initialRouteName: 'Wizard1',
  headerMode: 'none',
  cardStyle: { ...StyleSheet.absoluteFillObject },
  navigationOptions: ({ navigation }) => ({
    // TODO: fill options
  })
}

const RootStack = createStackNavigator({
  Wizard1: { screen: Wizard1 },
  Wizard2: { screen: Wizard2 },
  Wizard3: { screen: Wizard3 },
  Wizard4: { screen: Wizard4 },
  WizardSubmit: { screen: WizardSubmit },
  Search: { screen: Search }
}, navigationConfig);

export default RootStack
