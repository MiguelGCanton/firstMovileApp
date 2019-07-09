import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notes from './components/view/notes'
import Login from './components/view/login';
import Navbar from './components/navbar';
import NoteCreator from './components/view/NoteCreator';
import { createStackNavigator, createAppContainer } from "react-navigation";

export class App extends Component {

  static navigationOptions = {
    header:null
  }

  render(){
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547ff1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  principal:{
    paddingTop: Expo.Constants.statusBarHeight,
  }
});

const AppNavigator = createStackNavigator(
  {
  home: Login,
  notesView: Notes,
  noteCreatorView: NoteCreator,

  defaultNavigationOptions: Navbar,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#547ff1',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  
});

export default createAppContainer(AppNavigator);

// #547ff1
// 819EED