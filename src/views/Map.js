import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  TouchableHighlight,
  Image,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Drawer from 'react-native-drawer'

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

export default class Map extends Component {
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
        ref={(ref) => this._drawer = ref}
        type="overlay"
  //content={<ControlPanel />}
  tapToClose={true}
  openDrawerOffset={200} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
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
    backgroundColor: 'red',
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
