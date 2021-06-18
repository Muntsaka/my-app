import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import { StyleSheet } from 'react-native';


const CircleComponent = ({bgColor, position}) => {
return <TouchableOpacity
style={ {backgroundColor: bgColor, height: 60, width: 60, justifyContent: "center",
borderRadius: 60 / 2}}

onPress={() => alert(position)}
>
</TouchableOpacity>
};




    export default CircleComponent;