import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import Screen2 from './screens/Screen2'


//Exercise4
//Read Screen2.js    
export default function App() {
  {Screen2.map((e)=>{
    return (
    <Info name={e.name} author={e.author}/>
  );})}
}
export default App;
  return <Screen2/>
