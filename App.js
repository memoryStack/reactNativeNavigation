import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import screens from './Navigation/GenerateScreens'
import getNavigationOptions from './Navigation/NavigationOptions'

const defaultRouteName = 'Screen One'

const stack = createStackNavigator(
  screens,
  {
    initialRouteName: defaultRouteName,
    initialRouteParams: {
      displayMsg: `This is ${defaultRouteName}`
    }
  }
)

export default createAppContainer(stack)
