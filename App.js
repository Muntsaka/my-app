import React from 'react';
import { View } from 'react-native';
import Screen1 from './screens/Screen1';
import ColoredButton from './components/ColoredButton';
import ColoredScreen from './components/ColoredScreen';

//Exercise3 
//Using a component ColoredScreen with a parameter, paint the screen in blue. 
    
export default function App() {
  return(
      <View Style={{ColoredScreen: 'blue'}}>
      </View>
    )
  
}