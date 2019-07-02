import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Image, Dimensions  } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class login extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image style={style.icon} source={require('../../assets/icon.png')} />

                <Text style={style.text}> Welcome, please log in to view your notes </Text>

                <TextInput style={style.input} placeholder={"username"} />
                <TextInput style={style.input} placeholder={"password"} />

                <Button title={"login"}  />

            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        color: "white",
        margin: 7,
        backgroundColor: "gray",
        borderRadius: 5,
        paddingLeft: 10,
        fontFamily: "Roboto"

    },
    text:{
        fontSize: screenWidth* .07,
       marginBottom: 10
     },
    
    container:{
        backgroundColor: "rgba(255,255,255, .55)",
        height: screenHeight * .6,
        width: screenWidth * .8,
        borderRadius: 25,
        elevation: 5,
        padding: "5%"
    },
    icon:{
        
        width: screenHeight * 0.15,
    height: screenHeight * 0.15,
         
        marginTop: -50,
        alignSelf: "center"
    },
    button:{

    }
})
