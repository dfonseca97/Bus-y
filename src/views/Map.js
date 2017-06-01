import React, { Component } from 'react';
import {
  Alert,
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import renderIf from './renderIf'
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
import * as firebase from "firebase";

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

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
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
  
  onTap = () => this.navigate('Rutas')
  render() {
    const existe = (this.props.name != undefined || this.props.data != null) ? 'EXISTE' : 'NO EXISTE'
    return (
       <Drawer
        type='overlay'
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        openDrawerOffset={0.5}
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
            provider={MapView.PROVIDER_GOOGLE}
            style={{
              width: 375,
              height: 603,
            }}
            initialRegion={{
              latitude: 6.1973223,
              longitude: -75.5709436,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            >
            <MapView.Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: 6.198263,
              longitude: -75.574287
            }}
            title={"Oviedo"}
            description={"Parada al frente del centro comercial de Oviedo"}
            centerOffset={{ x: -42, y: -60 }}
            anchor={{ x: 0.84, y: 1 }}
            pinColor={"white "}
          />
          </MapView>
          <Button2 onPress={() => { this.onTap()}}/>
        </View>
          {renderIf(this.props.data,
                 <Card styles={{
                      card: {
                        width: 360, 
                        height: 100, 
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
                          top: 20,
                          right: 58,
                          //fontSize: 20
                        }}
                        >
                        {this.props.name}
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
                        10 minutos
                      </Text>
                      <Image style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 60,
                          right: 155
                        }}
                        source={require('../Resources/BlueMoney.png')}
                        />
                      <Text style={{
                          position: 'absolute',
                          top: 61,
                          right: 80
                        }}
                        >
                        2100
                      </Text>
                    </CardContent>
                    <CardAction >
                    </CardAction>
                  </Card>
              )}
      </Drawer>
    );
  }
}

Map.propTypes = {
  provider: MapView.ProviderPropType,
};

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
    right: 10
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
    bottom: 70,
    right: 10,
    width: 50,
    height: 50
  },  
});
export default Map