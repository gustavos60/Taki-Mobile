import { AppRegistry, YellowBox } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated'
])

AppRegistry.registerComponent(appName, () => App)
