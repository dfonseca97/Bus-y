import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  Image,
} from 'react-native'
import Map from './views/Map' 
import Sidemenu from './views/Sidemenu'
import Rutas from './views/Rutas'
import Testing2 from './views/Testing2';
import CalificaTuParada from './views/CalificaTuParada'
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
      case 'Rutas':
        return( <Rutas  navigator={_navigator} />);
        break;
      case 'CalificaTuParada':
        return(<CalificaTuParada navigator={_navigator}/>);
        break;
      case 'Sidemenu':
        return( <Sidemenu navigator={_navigator} />);
        break;
      case 'Testing2':
        return(<Testing2 navigator={_navigator}/>);
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


  