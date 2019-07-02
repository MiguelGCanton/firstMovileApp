import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class navbar extends Component {
    render() {
        
        return (
            <View style={styles.navbar}>
                <Text style={styles.text}>hello {this.props.name} !! </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navbar: {
      backgroundColor: 'gray',
      justifyContent: "center",
      
    elevation: 5,
    height: screenWidth *.15,
    backgroundColor: "#547ff1",
    elevation: 5,
    },
    text:{
        alignSelf:"center",
        color: "white",
    }
  });
