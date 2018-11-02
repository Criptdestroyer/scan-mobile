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
const App = StackNavigator(
	{
		Gateway: { screen: Gateway },
		Home: { screen: Home },
		// WorkshopList: { screen: WorkshopList },
		// WorkshopDetail: { screen: WorkshopDetail },
		// IntensiveClassList: { screen: IntensiveClassList },
		// IntensiveClassDetail: { screen: IntensiveClassDetail },
		// WeekendClassList: { screen: WeekendClassList },
		// WeekendClassDetail: { screen: WeekendClassDetail },
		QrCodeScanner: { screen: QrCodeScanner },
		// ProductScanner: { screen: ProductScanner },
		// Store: { screen: Store },
		// ProductList: { screen: ProductList },
		// ProductDetail: { screen: ProductDetail }
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
