import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import getNavigationOptions from '../Navigation/NavigationOptions'


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow'
  }
})

export default class Screen extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
        headerRight: () =>  getNavigationOptions(navigation.state.routeName, navigation),
      }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.getParam('displayMsg', 'no content')}</Text>
            </View>
        )
    }
}