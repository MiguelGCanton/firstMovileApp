import React, { Component } from 'react'
import {Button, Text, View, TextInput,StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class NoteCreator extends Component {
    static navigationOptions={
        title: ' Create a new note'
    }

    constructor(props){
        super(props);
        this.state ={
            title: '',
            content: ''
        }
    }

    render() {
        return (
            <View style={styles.background}>
                <Text> </Text>

                <TextInput 
                    onChangeText={(text) => this.setState({title: text})}
                    style={[styles.input, styles.title]} placeholder="title" />
                <TextInput 
                    onChangeText={(text) => this.setState({content: text})}
                    multiline = {true}
                    numberOfLines = {8} 
                    style={[styles.input, styles.content] } placeholder="content" />
                <Button title={'save'} onPress={() => this.props.navigation.navigate('notesView')}></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        color: "white",
        margin: 7,
        backgroundColor: "gray",
        borderRadius: 5,
        paddingLeft: 10,
        fontFamily: "Roboto",
        
    },
    title:{
        height: screenHeight* 0.10,
    },
    content:{
        height: screenHeight* 0.40,
    },
    background:{
        padding: 10,
        backgroundColor:'#547ff1',
        flex: 1
    }

});