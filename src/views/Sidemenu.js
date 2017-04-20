import React, { Component, } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
               
const vistas = [{key: 'Maps', text: 'Maps'}, { key: 'Rutas', text: 'Rutas'}, { key: 'Califica tu parada', text: 'Califica tu parada'}, 
{ key: 'Paradas cercanas', text: 'Paradas cercanas'}, { key: 'Estadisticas', text: 'Estadisticas'}]

export default class Sidemenu extrends Component{
  constructor(props){
    super(props)
  }
  
  navigate(id){
    this.props.navigator.push({ id });
  }
  
  render () {
    const buttons = vistas.map( vistas => {
      return (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => this.navigate(vistas.key)}
          key={vistas.key}
        >
          <Text style={styles.buttonText}>{vistas.text}</Text>
        </TouchableOpacity>
    )
  })
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {buttons}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    borderRightWidth: 1,
    borderRightColor: '#BDBDBD',
    backgroundColor: '#fff'
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    padding: 30,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
    fontWeight: '200'
  }
})