import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native'
import renderIf from './renderIf'
import MapView from 'react-native-maps';
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Drawer from 'react-native-drawer'
import Sidemenu from './Sidemenu'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import Button from 'react-native-button';

class Button2 extends Component {
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
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            
            />
          
          <Button2 onPress={() => { this.onTap()}}/>
        </View>  
         <Card styles={{
            card: {
              width: 360, 
              height: 60, 
              position:'absolute', 
              top: 65, 
              left: 3, 
              backgroundColor: 'rgba(255,255,255,0.85)',
              }}}>
            <CardContent>
             <Image 
               style={{
                  width: 20,
                  height: 20,
                  right: 140,
                  top: 2,
                }}
               resizeMode={"contain"}
               source={require('../Resources/308BLUE.png')}
               />
              <Text style={{
                  position: 'absolute',
                  top: 17,
                  right: 60,
                  fontSize: 20
                }}
                >
                Gascuña
              </Text>
              <Image style={{
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  top: 19,
                  left: 50
                }}
                source={require('../Resources/17392-200Blue.png')}
                />
              <Text style={{
                  position: 'absolute',
                  top: 22,
                  left: 80
                }}
                >
                TIME
              </Text>
            </CardContent>
            <CardAction >
            </CardAction>
          </Card>
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
   card: {
    width: 300
  },
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
  title2: {
    fontSize:2,
    backgroundColor: 'transparent'
  },
  button2: {
    marginRight: 2
  },
  map: {
    position: 'absolute',

    
  }
});
export default Map