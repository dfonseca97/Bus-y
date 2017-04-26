//fijate a ver si funciona este dropdown menu https://js.coach/react-native/react-native-dropdown?search=dropdown%20menu la segunda opcion
// mira lo de las estrellas https://js.coach/react-native/react-native-star-rating?search=star%20rating la primera opcion

import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import StarRating from 'react-native-star-rating';


class CalificaTuParada extends Component {
 constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
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
  render() {
    return (
      <View>
         <NavBar style={styles}>
          <NavButton>
            <NavButtonText
              style={styles.buttonText}
              onPress={() => { this.navigate('Map')}}
              >
              {"Atras"}
            </NavButtonText>
          </NavButton>
          <NavTitle style={styles.title}>
            {"Califica tu parada"}
            <Image
              style={{
                width: 30,
                height: 20,
              }}
              resizeMode={"contain"}
              source={require('../Resources/estrella.png')}
              />
          </NavTitle>
            <NavButton>
              <NavButtonText>
                {"    "}
              </NavButtonText>
            </NavButton>
          </NavBar>
      </View>
      <MenuContext style={{ flex: 1 }} ref="MenuContext">
        <View style={styles.content}>
          <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropdownSelection: value })}>
            <MenuTrigger>
              <Text>{this.state.dropdownSelection}</Text>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.dropdownOptions}
              renderOptionsContainer={(options) => <ScrollView><Text>CHOOSE SOMETHING....</Text>{options}</ScrollView>}>
              <MenuOption value="Option One">
                <Text>Option One</Text>
              </MenuOption>
              <MenuOption value="Option Two">
                <Text>Option Two</Text>
              </MenuOption>
              <MenuOption value="Option Three">
                <Text>Option Three</Text>
              </MenuOption>
              <MenuOption value="Option Four">
                <Text>Option Four</Text>
              </MenuOption>
              <MenuOption value="Option Five">
                <Text>Option Five</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
      <View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          starColor={'yellow'}
          emptyStarColor={'#f2828a'}
          starSize= {30}
        />
      </View>
    )
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
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  dropdown: {
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200
  }
})

export default CalificaTuParada
