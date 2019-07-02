import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class card extends Component {
    render() {
        return (
            <View style={[style.card, style.roundBorders]}>
                <Text style={style.title}>{this.props.title} </Text>
                <Text style={style.content}>{this.props.content}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    title:{
        backgroundColor: "gray",
        justifyContent: "center",
        padding: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    card:{
        backgroundColor: "white",
        margin: 5
    },
    content:{
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        marginTop: 5,
        padding: 5,
        backgroundColor: "gray",
        
    },
    roundBorders:{
        borderRadius: 5
    }
})