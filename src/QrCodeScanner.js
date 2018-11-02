'use strict';
import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Toolbar from './components/Toolbar';
import { createStackNavigator } from 'react-navigation';

export default class QrCodeScanner extends Component{
    static navigationOption = ({navigation})=>{
        return{
            header: <Toolbar title={'Scan Barcode'} navigation={navigation} />
        };
    };
    constructor(props){
        super(props);
        this.state = {
            qrcode: ''
        };
    }


    render(){
        return (
			<QRCodeScanner
				showMarker
				reactivate
				reactivateTimeout={4000}
				onRead={this.onSuccess.bind(this)}
				topContent={
					<Text style={{ textAlign: 'center' }}>{this.state.qrcode}</Text>
				}
				bottomContent={
					<TouchableOpacity style={styles.buttonTouchable}
					onPress={()=>this.props.navigation.navigate('Information')}>
					<Text style={styles.buttonText}>OK. Got it!</Text>
				  </TouchableOpacity>
				}/>
		);
    }
    onSuccess = e => {
		console.log(e);
		this.setState({ qrcode: e.data });
    };
     // onSuccess(e) {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => alert(e.data));
  //   //   .catch(err => console.error('An error occured', err));
    
  // }
}

const styles = StyleSheet.create({
	centerText: {
		flex: 1,
		fontSize: 18,
		padding: 32,
		color: '#777'
	},
	textBold: {
		fontSize: 21,
		color: 'rgb(0, 122, 255)'
	},
	buttonTouchable: {
		padding: 16
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		color: 'rgba(0, 0, 0, 0.8)'
	}
});