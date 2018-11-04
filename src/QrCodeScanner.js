'use strict';
import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Toolbar from './components/Toolbar';
import { StackNavigator } from 'react-navigation';

import * as ax from 'axios';
import qs from 'qs';
import API_URL from './config';

const axios = ax.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

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
					<Text>Scan your Code</Text>
				}/>
		);
    }
    onSuccess (e){
		this.setState({ qrcode: e.data }, () => {
			axios({
				method: 'POST',
				url: '/customers/check-qrcode',
				data: qs.stringify({
					qrcode: e.data
				})
			})
			.then(response => {
				const status = response.data.status;
				const data = response.data.data;
				if (status ===  'success') {
					let item = { image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_IC.jpg', ...data }; 
					this.props.navigation.navigate('Information',{item});
				} else {
					console.log(data);
				}
			})
			.catch(error => {
				console.log(error);
			});
		});
    }
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