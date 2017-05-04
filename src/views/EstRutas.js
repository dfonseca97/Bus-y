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
            {"Estadisticas de Rutas"}
          </NavTitle>
          <NavButton>
            <NavButtonText>
              {"    "}
            </NavButtonText>
          </NavButton>
        </NavBar>
      </View>
      <Card styles={{
         card: {
           width: 360,
           height: 200,
           position:'absolute',
           top: 65,
           left: 3,
           backgroundColor: 'rgba(255,255,255,0.85)',
           }}}>
         <CardContent>
          <Image
            style={{
               width: 200,
               height: 200,
               right: 140,
               top: 2,
             }}
            resizeMode={"contain"}
            source={require('../Resources/momazo.jpg')}
            />
         </CardContent>
         <CardAction >
         </CardAction>
       </Card>
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

export default Estadisticas
