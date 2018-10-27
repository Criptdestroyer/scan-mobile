/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import {  Title,  Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  StatusBar
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Routes from './src/Routes';


export default class App extends Component<Props> {
  // onSuccess(e) {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => alert(e.data));
  //   //   .catch(err => console.error('An error occured', err));
    
  // }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
      <Routes/>
      </View>
      // <QRCodeScanner
      //   onRead={this.onSuccess.bind(this)}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Welcome to <Text style={styles.textBold}>E-ticketing Emir</Text> scan your barcode in here.
      //     </Text>
      //   }
      //   bottomContent={
      //     <TouchableOpacity style={styles.buttonTouchable}>
      //       <Text style={styles.buttonText}>OK. Got it!</Text>
      //     </TouchableOpacity>
      //   }
      // />
     
      

    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  container : {

    flex: 1,
    
    }
});
