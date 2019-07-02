import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notes from './components/view/notes';
export default function App() {
  
  return (
    
   /* <View style={styles.container}>
      <Login/>
    
    </View>*/
    <View style={styles.container}>
      <Notes name={"chino"}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    /*backgroundColor: '#547ff1',
    alignItems: 'center',
    justifyContent: 'center',*/
  },

  principal:{
    paddingTop: Expo.Constants.statusBarHeight,
  }
});

// #547ff1
// 819EED