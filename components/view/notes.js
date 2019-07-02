import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import Navbar from '../navbar' 
import Card from '../card' 

const cards= [
    {
        title: "la carta inicial",
        content: "este libro es sobre la historioa de todo lo que ha pasado ...",
        color: "blue",
    }, 
    {
        title: "La resureccion",
        content: "Disfruta un viaje nuca antes visto, viaja con el protagonista atravez de"+
                "cada una de sus memorias, en busca de su tesoro perdido",
        color: "blue",
    },
    {
        title: "Los nuevos sueños, de un dios en sus ultimos momentos",
        content: "introducir información",
        color: "yellow"
    },
    {
        title: "la tristeza de un rey",
        content: " lqkwjsaljdasljdsaljasd lkajsldkjasdljasdlkas ",
        color: "pink"
    }
];



export default class notes extends Component {
    constructor(props){
        super(props)
    }

    renderList(){  
        let list = [];
        let index=0;
        list= cards.map((element) =>{
                let newCard= <Card key={index} title={element.title} content={element.content}  color={element.color}/>;
                index++;
                return newCard;
        });

        return list;
    }

    render() {
        return (
            <ScrollView style={style.main}>
               
               <Navbar name={"chino"}/>
               <View style={style.cardContainer}>
                    {this.renderList()}
               </View>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create({
    main:{
        paddingTop: Expo.Constants.statusBarHeight,
        backgroundColor: "white",
        backgroundColor: "#819EED"
    },
    cardContainer:{
        padding: "1%",
        flex: 1,
        
        display:"flex",
        flexWrap: "wrap"
    }
})
