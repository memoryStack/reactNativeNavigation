
const screenNameToId = {
    'Screen One': 1,
    'Screen Two': 2,
    'Screen Three': 3,
    'Screen Four': 4,
    'Screen Five': 5,
    'Screen Six': 6,
    'Screen Seven': 7,
    'Screen Eight': 8,
    'Screen Nine': 9,
    'Screen Ten': 10,
}

const getScreen = () => require('../components/screen').default

// all the navigationItems are considered to be the part of right part of the header
const routes = [
    {
        screeName: 'Screen One',
        getScreen,
        navigationItems: ['Screen Two', 'Screen Three', 'Screen Four'],
    },
    {
        screeName: 'Screen Two',
        getScreen,
        navigationItems: ['Screen Five', 'Screen Three', 'Screen Four'],
    },
    {
        screeName: 'Screen Three',
        getScreen,
        navigationItems: ['Screen Five', 'Screen Six', 'Screen Four'],
    },
    {
        screeName: 'Screen Four',
        getScreen,
        navigationItems: ['Screen Five', 'Screen Six', 'Screen Seven'],
    },
    {
        screeName: 'Screen Five',
        getScreen,
        navigationItems: ['Screen Eight', 'Screen Six', 'Screen Seven'],
    },
    {
        screeName: 'Screen Six',
        getScreen,
        navigationItems: ['Screen Eight', 'Screen Nine', 'Screen Seven'],
    },
    {
        screeName: 'Screen Seven',
        getScreen,
        navigationItems: ['Screen Eight', 'Screen Nine', 'Screen Ten'],
    },
    {
        screeName: 'Screen Eight',
        getScreen,
        navigationItems: ['Screen One', 'Screen Nine', 'Screen Ten'],
    },
    {
        screeName: 'Screen Nine',
        getScreen,
        navigationItems: ['Screen One', 'Screen Two', 'Screen Ten'],
    },
    {
        screeName: 'Screen Ten',
        getScreen,
        navigationItems: ['Screen One', 'Screen Two', 'Screen Three'],
    },
]

export default routes


