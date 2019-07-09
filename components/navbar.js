import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class navbar extends Component {
    render() {
        
        return (
            <View style={styles.navbar}>
                <TouchableOpacity  >
                    <Text style={styles.arrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.text}>hello {this.props.name} !! </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navbar: {
    alignItems: "center",
    elevation: 5,
    height: screenWidth *.15,
    backgroundColor: "#547ff1",
    display:"flex",
    flexDirection: "row"
    },
    text:{
        
    },
    text:{
        fontSize: 20,
        color: "white",
        textAlignVertical: "center",
        textAlign: "center",
        flex: 1,
        height: "100%"
    },
    arrow:{
        fontSize: 40,
        display:"flex",
        backgroundColor:"gray",
        alignItems:"center",
        textAlignVertical: "center",
    }
  });
