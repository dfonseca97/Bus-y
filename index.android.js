import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Base from './src/Base';

export default class Busy extends Component {
  render() {
    return(
      <Base initialRoute={{id: 'Map'}} />
    )
  }
}
AppRegistry.registerComponent('Busy', () => Busy);
