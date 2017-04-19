import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  Image,
} from 'react-native'
import Map from './views/Map' 

export default class Base extends Component {
  constructor( props ) {
    super( props )
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    _navigator = navigator;
    switch(route.id) {
      case 'Map':
        return( <Map navigator={_navigator} />);
        break;
      default:
        return( <Text>SOMETHING WENT WRONG ${route}</Text> );
    }
  }
  render() {
    return(
        <Navigator
          initialRoute={this.props.initialRoute}
          renderScene={this.renderScene}
          />
    )
  }
}


  