import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  MapView,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native'
//import MapView from 'react-native-maps';
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Drawer from 'react-native-drawer'
import Sidemenu from './Sidemenu'

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress = {() => {this.props.onPress()}}
        underlayColor = "white" 
        activeOpacity = {0.7}>
        <View style = {styles.button}>
          <Image 
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode={"contain"}
            source={require('../Resources/308.png')}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {taps: 0};
    this.navigate = this.navigate.bind(this);
  }
  navigate(id) {
    this.props.navigator.push({ id });
  }
  onTap = () => {
    this.setState({
      taps: this.state.taps + 1
    });
  }

  render() {
    return (
       <Drawer
        type='overlay'
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        openDrawerOffset={0.3}
        content={<Sidemenu navigator={this.props.navigator}/>}
         >
        <View style={styles.container}> 
          <NavBar style={styles}>
            <NavButton onPress={() => {this._drawer.open()}}>
              <Image 
                style={{
                  width: 30,
                  height: 20,
                }}
                resizeMode={"contain"}
                source={require('../Resources/menuicon.png')}
                />
            </NavButton>
            <NavTitle style={styles.title}>
              {"Menú"}
            </NavTitle>
            <NavButton>
              <NavButtonText>
                {"   "}
              </NavButtonText>
            </NavButton>
          </NavBar>
          <MapView
            style={{
              width: 380,
              height: 670,
            }}
            onRegionChange={() => {}}
            onRegionChangeComplete={() => {}}
            showsUserLocation={true}
            />
          <Button onPress={() => { this.onTap()}}/>
        </View>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: 'black', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
  drawerOverlay: {
    
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
  button: {
    backgroundColor: '#33AAFF',
    borderWidth: 10,
    borderRadius: 60,
    borderColor: '#33AAFF',
    padding: 5,
    position: 'absolute',
    bottom: 80,
    right: 10,
    width: 50,
    height: 50
  },  
});
export default Map