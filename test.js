import React, { Component, } from 'react'
import {
  View,
  Image,
} from 'react-native'

class Test extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Image 
          style={{
            width: 300,
            height: 200,
          }}
          resizeMode={"contain"}
          source={{uri:'https://unsplash.it/600/400/?random'}}
        />
      </View>
    )
  }
}

export default Test