import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
const rutas = [{key: 'Map', text: 'Atras'},]

class Rutas extends Component {

 constructor(props) {
    super(props);
   this.navigate = this.navigate.bind(this);
   }
  navigate(id) {
    this.props.navigator.push({ id });
  }
  render() {
    return (
      
      <View>
         <NavBar style={styles}>
        <NavButton>
          <NavButtonText 
            style={styles.buttonText}
            onPress={() => { this.navigate('Map')}}
            >
            {"Atras"}
          </NavButtonText>
        </NavButton>
        <NavTitle style={styles.title}>
          {"Rutas"}
        </NavTitle>
        <NavButton>
          <NavButtonText>
            {"    "}
          </NavButtonText>
        </NavButton>
      </NavBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
  },
  navBar: {
    backgroundColor: '#9A0101',
  },
  title: {
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
})

export default Rutas