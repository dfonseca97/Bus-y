import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { List, ListItem } from 'react-native-elements'

const rutas = [
  {title: 'Gascuña Ruta 1',icon: 'directions-bus'}, 
  {title: 'Sabaneta',icon: 'directions-bus'}, 
  {title: 'Envigado Dorado-La Paz',icon: 'directions-bus'}
  ]

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
      
      <View style={styles.container}>
         <NavBar style={styles}>
        <NavButton>
          <NavButtonText 
            style={styles.buttonText}
            onPress={() => this.navigate('CalificaTuParada')}
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
        <List>
        {
           rutas.map((item, i) => (
           <ListItem
               key={i}
               title={item.title}
               leftIcon={{name: item.icon}}
             />
           ))
          }
       </List>
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
  container: {
    backgroundColor: '#9A0101'
  }
})

export default Rutas