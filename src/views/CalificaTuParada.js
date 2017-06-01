//fijate a ver si funciona este dropdown menu https://js.coach/react-native/react-native-dropdown?search=dropdown%20menu la segunda opcion
// mira lo de las estrellas https://js.coach/react-native/react-native-star-rating?search=star%20rating la primera opcion

import React, { Component, } from 'react'
import {
  View,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import ModalPicker from 'react-native-modal-picker'
import StarRating from 'react-native-star-rating';

var alertMessage = '¡Su calificación se ha enviado exitosamente!'

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress = {() => {this.props.onPress()}}
        underlayColor = "white" 
        activeOpacity = {0.7}>
        <View style = {styles.button}>
          <Text style={styles.buttonBText}>
            Calificar
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class CalificaTuParada extends Component {
 constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      textInputValue: ''
    };
   this.navigate = this.navigate.bind(this);
    }
  navigate(id) {
    this.props.navigator.push({ id });
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  onTap = () => Alert.alert(
            '¡Calificada!',
            alertMessage,
          )
  render() {
    let index = 0;
        const data = [
            { key: index++, section: true, label: 'Paradas Disponibles' },
            { key: index++, label: 'Oviedo' },
            { key: index++, label: 'Rio Sur' },
            { key: index++, label: 'Milla de Oro' },
            { key: index++, label: 'La Strada' },
            { key: index++, label: 'Huehue' }
        ];
    return (
      <View>
         <NavBar style={styles}>
          <NavButton 
            onPress={() => { this.props.navigator.pop()}}>
            <NavButtonText
              style={styles.buttonText}
              >
              {"Back"}
            </NavButtonText>
          </NavButton>
          <NavTitle style={styles.title}>
            {"Califica tu parada"}
          </NavTitle>
            <NavButton>
              <NavButtonText>
                {"    "}
              </NavButtonText>
            </NavButton>
        </NavBar>
        <View style={styles.modal}>
          <ModalPicker
            data={data}
            initValue="Select something yummy!"
            onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
           <TextInput
             style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
             editable={false}
             placeholder="-Selecciona Tu Parada-"
             value={this.state.textInputValue} />  
          </ModalPicker>
        </View>
        <View style={styles.starContainer}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            starColor={'#EDD21F'}
            emptyStarColor={'#EDD21F'}
            starSize={40}
          />
        </View>
        <Button onPress={() => { this.onTap()}}/>
      </View>
    )
  }
}
      

const styles = StyleSheet.create({
  starContainer: {
    alignItems: 'center',
    width: 200,
    left: 90,
    bottom: 10
  },
  modal: {
    padding: 50,
    
  },
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
  buttonBText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#33AAFF',
    borderWidth: 10,
    borderRadius: 60,
    borderColor: '#33AAFF',
    padding: 5,
    width: 85,
    height: 50,
    top: 50,
    alignSelf: 'center'
  },  
  content: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
})

export default CalificaTuParada
