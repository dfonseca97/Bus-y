import React, { Component } from 'react'
import {View, Text, Image, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const list = [{title: 'Gascuña Ruta 1',icon: 'bus'}, {title: 'Sabaneta',icon: 'bus'}, {title: 'Envigado Dorado-La Paz',icon: 'bus'}]

export default class Rutas extends Component {
  constructor(props) {
        super(props);
    }
    
    render() {
    return(
      <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
            />
          ))
         }
      </List>
      )
    }
}
