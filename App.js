
import React, {Component} from 'react';

//import from './nav'
import {createStackNavigator,createAppContainer}from 'react-navigation';
import LoginScreen from './screen/LoginScreen';

import Home from './screen/Home';

export default class App extends Component {



// static navigationOptions = {
// title: 'Welcome',
// };

render() {
return (<AppStackNavigator/>

);
}
}
const mainNavigation = createStackNavigator({
    Login:LoginScreen,
    Home:Home,   
})
const AppStackNavigator=createAppContainer(mainNavigation)
