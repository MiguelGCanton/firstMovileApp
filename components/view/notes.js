import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Navbar from '../navbar' 
import Card from '../card' 

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const cardWidth = Math.round(screenWidth*0.45);


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
        super(props);
        this.state={
            text: "chino",
            active: true
        }
    }

    changeText= () => {
        if(this.state.active){
            this.setState({text: "true"});
            this.setState({active: !this.state.active});
        }else{
            this.setState({text: "false"});
            this.setState({active: !this.state.active});
        }
        
    }

    renderList(){  
        let list = [];
        let index=0;
        list= cards.map((element) =>{
                let newCard= <Card key={index} 
                                    title={element.title} 
                                    content={element.content}  
                                    color={element.color}
                                    size={cardWidth}/>;
                index++;
                return newCard;
        });

        return list;
    }

    renderCardCreator(){  
        let newCard= 
            <TouchableOpacity onPress={this.changeText} style={[style.cardCreatorButton, {width: cardWidth}]} >
                <Text style={style.cardCreatorText}>+</Text>
            </TouchableOpacity>
        return newCard;
    }

    render() {
        return (
            <ScrollView style={style.main}>
               <Navbar name={this.state.text}/>
               <View style={style.cardContainer}>
                    {this.renderCardCreator()}
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
        flexWrap: "wrap",
        alignItems: "stretch",
        flexDirection: "row",
        justifyContent: "center"
    },
    cardCreatorButton:{
        backgroundColor: "white",
        margin: 5,
        elevation: 3,
        borderRadius: 5,
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },
    cardCreatorText:{       
        fontSize: 60,
        color:"gray"
    }
})
