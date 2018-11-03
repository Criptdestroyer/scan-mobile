/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Routes from './src/Routes';
import { StackNavigator } from 'react-navigation';
import Gateway from './src/Gateway';
import Home from './src/Home';
import QrCodeScanner from './src/QrCodeScanner';
import Information from './src/Information';
const App = StackNavigator(
	{
		Gateway: { screen: Gateway },
		Home: { screen: Home },
		QrCodeScanner: { screen: QrCodeScanner },
		Information: {screen: Information}
		// ProductScanner: { screen: ProductScanner },
	},
	{
		initialRouteName: 'Home'
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
