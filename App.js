import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import ColoredScreen from './components/ColoredScreen';

//Exercise4
//Change ColoredScreen.js so that on click anywhere in the screen it changes to black.
    
export default function App() {
  return <ColoredScreen bgColor="blue" />
}