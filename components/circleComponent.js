import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import { StyleSheet } from 'react-native';


const CircleComponent = ({bgColor}) => {
return <TouchableOpacity
style={ {backgroundColor: bgColor, height: 60, width: 60, justifyContent: "center",
borderRadius: 60 / 2}}

onPress={() => alert(bgColor)}
>
</TouchableOpacity>
};




    export default CircleComponent;