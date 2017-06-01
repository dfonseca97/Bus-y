import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Base from './src/Base';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANdVKJb_d2ewSvSaD7orZxf3IUbdc_7Zo",
  authDomain: "prueba-2a1c3.firebaseapp.com",
  databaseURL: "https://prueba-2a1c3.firebaseio.com",
  storageBucket: "prueba-2a1c3.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class ReDeathX extends Component {
  render() {
    return(
      <Base initialRoute={{id: 'Map'}} />
    )
  }
}
AppRegistry.registerComponent('ReDeathX', () => ReDeathX);
