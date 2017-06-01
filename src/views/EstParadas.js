import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

class Estadisticas extends Component {
  render() {
    return (
      <View>
        <Image 
          style={{
            width: 300,
            height: 200,
          }}
          resizeMode={"contain"}
          source={require('../Resources/308.png')}
        />
      </View>
    );
  }
}

export default Estadisticas
