import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import { StyleSheet } from 'react-native';


const CircleComponent = ({bgColor}) => {
return <TouchableOpacity
style={styles.button}
onPress={() => console.log('COLOR')}
>
</TouchableOpacity>
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
paddingHorizontal: 10
},
button: {
alignItems: "center",
backgroundColor: "#DDDDDD",
padding: 10
},
countContainer: {
alignItems: "center",
padding: 10
}
});



    export default CircleComponent;