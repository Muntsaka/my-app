import React from 'react';
import { View } from 'react-native';
import Screen1 from './screens/Screen1';

//Exercise 3
  /*
    Create a new Screen component (call it ColoredScreen.js) which is an empty <View/> with background color as a parameter.
    In App.js add two ColoredButtons with texts ("Blue Screen", "Yellow Screen"). If you click first button you will show a Blue Screen, second button you will show a Yellow Screen.
  */


<ColoredButton onPress={ColoredScreen} color="blue" text="Blue Screen"/>
<ColoredButton onPress={ColoredScreen} color="yellow" text="Yellow Screen"/>

    
export default function App() {
  return(
    <Screen1></Screen1> 
  )
}