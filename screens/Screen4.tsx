import React from "react";
import { View } from "react-native";
import CircleComponent from "../components/circleComponent";


const Screen4 = () => {

    let numToPrint:string;
    numToPrint=0;

    
    const suma = (num1:number, num2:number)=>{
        return num1+num2;
    } 

    for(let i=0; i<5; i++){
        console.log(suma(1,2));
    }

    let circle:{color?:string, position:number};

    circle={position: 1};

    console.log(circle);
    

    return (
        <View style={{backgroundColor:"blue", height:"100%", width:"100%"}}>
            <CircleComponent bgColor="green" position={1}/>
            <CircleComponent bgColor="yellow" position={1}></CircleComponent>
        </View>
    )

}

export default Screen4;