import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import { StyleSheet } from 'react-native';


const CircleComponent = ({bgColor}) => {
return <TouchableOpacity
style={styles.button}
onPress={(bgColor) => console.log('COLOR')}
>
</TouchableOpacity>
};




    export default CircleComponent;