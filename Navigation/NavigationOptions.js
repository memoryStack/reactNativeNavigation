import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import screenNameToId from './ScreenIdMapper'
import routes from './Routes'
import navigateTo from './navigateTo'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    childContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'green'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})

const getNavigationItems = (currentScreenName) => {
    const currentScreenRouteData = routes.filter(({ screeName }) => screeName === currentScreenName)
    return currentScreenRouteData[0].navigationItems.map( screenName => {
        return {
            id: screenNameToId[screenName],
            screenName
        }
    })
}

const navigationButtonPress = (nextRoute, navigation) => {
    const params = {
        displayMsg: `This is ${nextRoute}`
    }
    navigateTo(nextRoute, params, navigation)
}

const getChild = ({id: text, screenName: correspondingRouteName}, navigation) => {
    return (
        <TouchableOpacity onPress={() => navigationButtonPress(correspondingRouteName, navigation)}>
            <View style={styles.childContainer}>
                <Text style={styles.textStyle}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const getChildrenViews = (items, navigation) => items.map(item => getChild(item, navigation))

export default getNavigationOptions = (screenName, navigation) => {
    const navigationItemsInfo = getNavigationItems(screenName)
    const children = getChildrenViews(navigationItemsInfo, navigation)
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}