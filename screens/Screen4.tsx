import React from "react";
import { View } from "react-native";
import CircleComponent from "../components/circleComponent";


const Screen4 = () => {

    let numToPrint:string;
    const myNum=4;
    numToPrint = ""+myNum;


    let circle:{color?:string, position:number};

    circle={position: 1};

    console.log(circle);
    

    return (
        <View style={{backgroundColor:"blue", height:"100%", width:"100%"}}>
            <CircleComponent bgColor="green" position={1}></CircleComponent>
            <CircleComponent bgColor="yellow" position={1}></CircleComponent>
        </View>
    )

}

export default Screen4;