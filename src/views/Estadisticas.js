import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { List, ListItem } from 'react-native-elements'

const estadisticas = [
  {title: 'Estadisticas de Rutas', key: 'EstRutas'},
  {title: 'Estadisticas de Paradas', key: 'EstParadas'}
  ]

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
              {""}
            </NavButtonText>
          </NavButton>
          <NavTitle style={styles.title}>
            {"Estadisticas"}
          </NavTitle>
          <NavButton>
            <NavButtonText>
              {"    "}
            </NavButtonText>
          </NavButton>
        </NavBar>
        <List>
          {
            estadisticas.map((item, i) => (
              <ListItem
                key={i} 
                title={item.title}
                onPress={() => this.navigate('EstParadas')}
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
})

export default Estadisticas
