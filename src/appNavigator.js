import { createStackNavigator } from 'react-navigation';
import Greetings from './greeting';
import Home from './home';

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Greeting: {screen: Greetings}
});

export default AppNavigator;
