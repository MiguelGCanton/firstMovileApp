import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Image, Dimensions  } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class login extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.formContainer}>
                    <Image style={style.icon} source={require('../../assets/icon.png')} />

                    <Text style={style.text}> Welcome, please log in to view your notes </Text>
                    <View style={style.inputContainer}>
                        <TextInput style={style.input} placeholder={"username"} 
                            onChangeText={(text) => this.setState({username: text})}/>
                        <TextInput style={style.input} textContentType={"password"} placeholder={"password"} 
                            onChangeText={(text) => this.setState({password: text})}/>
                    </View>
                    <Button title={"login"} onPress={() => this.props.navigation.navigate('notesView',
                    {
                        name: this.state.name
                    })} />

                </View>
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
        fontFamily: "Roboto",
        height: screenHeight* 0.08,
    },
    text:{
        fontSize: screenWidth* .07,
       marginBottom: 10
     },
     inputContainer:{
        margin: 5
     },
     container: {
         flex:1,
         backgroundColor: '#547ff1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Expo.Constants.statusBarHeight,
     },
    
    formContainer:{
        backgroundColor: "rgba(255,255,255, .55)",
        height: screenHeight * .6,
        width: screenWidth * .8,
        borderRadius: 25,
        elevation: 5,
        padding: "5%",
        
       

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
