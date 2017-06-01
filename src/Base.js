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
import CalificaTuParada from './views/CalificaTuParada'
import Estadisticas from './views/Estadisticas'
import EstParadas from './views/EstParadas'
import ParadasCercanas from './views/ParadasCercanas'

class Base extends Component {
  constructor( props ) {
    super( props )
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    _navigator = navigator;
    switch(route.id) {
      case 'Map':
        return( <Map navigator={_navigator} data={route.data} name={route.name} />);
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
      case 'Estadisticas':
        return( <Estadisticas navigator={_navigator} />);
        break;
      case 'ParadasCercanas':
        return( <ParadasCercanas navigator={_navigator} />);
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
export default Base

  