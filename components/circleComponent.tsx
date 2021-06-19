import React from 'react';
import { Alert, View } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

const CircleComponent = (props: {bgColor:string, position:number}) => {
    return (
        <TouchableOpacity 
            style={{backgroundColor: props.bgColor, height: 60, width: 60, justifyContent: "center", borderRadius: 60 / 2}} 
            onPress={() => {console.log(props.position)} } />     
    );
};

    export default CircleComponent;