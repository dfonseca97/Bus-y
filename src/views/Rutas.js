import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { List, ListItem } from 'react-native-elements'

const rutas = [
  {title: 'Gascuña 1',icon: 'directions-bus'},
  {title: 'Sabaneta',icon: 'directions-bus'},
  {title: 'Env. Dorado',icon: 'directions-bus'}
  ]



class Rutas extends Component {

 constructor(props) {
    super(props);
   this.navigate = this.navigate.bind(this);
   }
  navigate(id, data, name) {
    this.props.navigator.push({ id, data, name});
  }
  render() {
    
    return (
      <View>
        <NavBar style={styles}>
          <NavButton
            onPress={() => { this.props.navigator.pop()}}>
            <NavButtonText
              style={styles.buttonText} 
              >
              {"Back"}
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
                onPress={() => { this.navigate('Map',true,item.title)}} 
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

export default Rutas
