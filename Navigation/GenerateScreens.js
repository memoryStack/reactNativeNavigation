import routes from './Routes'

const generateScreens = () => {
    const screens = {}
    routes.forEach((route) => {
        screens[route.screeName] = { getScreen: route.getScreen }
    })
    return screens
}

const screens = generateScreens()
export default screens
