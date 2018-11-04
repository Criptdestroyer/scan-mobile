/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Login from './src/pages/Login';
import { StackNavigator } from 'react-navigation';
import Gateway from './src/Gateway';
import Home from './src/Home';
import QrCodeScanner from './src/QrCodeScanner';
import Information from './src/Information';
const App = StackNavigator(
	{	
		Login:{screen: Login},
		Gateway: { screen: Gateway },
		Home: { screen: Home },
		QrCodeScanner: { screen: QrCodeScanner },
		Information: {screen: Information}
		
	},
	{
		initialRouteName: 'Login'
	}
);

export default App;

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//       <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
//       <Routes/>
//       </View>
//     );
//   }
// }
