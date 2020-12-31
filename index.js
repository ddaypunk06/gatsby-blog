import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-157937387-1')
    ReactGA.pageview('/index')
    ReactGA.event({
        category: 'User',
        action: 'View index'
    })
}