import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";
import ButtonTask from "../components/buttontask"

const Screen6 = () => {
     /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(valor inicial);
     */
    const [todoList, changeTodoList] = useState([] as string[]);
    const [todo, saveTodo] = useState("");
    /* Variable count que és un Estat i representa el número de cops que s'ha eliminat una task + mètode per actualitzar el valor setCount*/
    const [count, setCount] = useState(0)

    const addToList=()=>{
      changeTodoList([...todoList, todo])
    }

    const removeFromList=(x:number)=>{
      
      /*TODO  Aquí falta UNA linea */    
      setCount (count+1)
      todoList.splice(x,1)
      changeTodoList([...todoList])
      
      
    }
    let StrikeThrough:{element?:string, isComplete:boolean};

    return (
    <View style={{padding: 10}}>

      <Text>{count}</Text> {/* Component visual que es pinta cada cop que hi ha un canvi a la variable count*/}

      <TextInput
        style={{ height: 40 }}
        placeholder="Escriu element de la llista"
        value={todo}
        onChangeText={text => { saveTodo(text) }}
      />
      <Button title="add" onPress={addToList} />

      
      {todoList.map((element, position)=>{ return <ButtonTask key={position} onPress={()=>{StrikeThrough}} color="green" text={element} pos={position} isComplete/> })
    
    }  
    </View>

    
    )
    
}
export default Screen6; 