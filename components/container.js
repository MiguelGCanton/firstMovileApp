import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navbar from './navbar'

export default class container extends Component {
    render() {
        return (
            <View>
                <Navbar name={this.props.name} />
                <Text> asd </Text>
            </View>
        )
    }
}
