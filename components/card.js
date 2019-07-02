import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class card extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: this.props.title,
            content: this.props.content,
            size: this.props.size,
        }
    }

    render() {
        return (
            <View style={[style.card, {width: this.state.size}]}>
                <View style={style.header}>
                    <Text style={style.title}>{this.props.title} </Text> 
                    <TouchableOpacity style={style.button}><Text>:</Text></TouchableOpacity>
                </View>
                <Text style={style.content}>{this.props.content}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    title:{
        flex:1,
        display: "flex",
        width:"auto",
        justifyContent: "center",
        padding: 5,
  
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    header:{
        display: "flex",
        flexDirection:"row",
        borderBottomWidth: 2,

    },
    button: {
        alignItems:"center",
        display: "flex",
        padding: 5,
        backgroundColor: "gray",
        justifyContent: "center",
    },
    card:{
        backgroundColor: "white",
        margin: 5,
        elevation: 3,
        borderRadius: 5,
    },
    content:{
        flex: 1,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 5,
        backgroundColor: "white",
        textAlignVertical: "center"
    },

})