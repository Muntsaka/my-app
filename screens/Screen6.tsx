import React, { useState } from "react";
import { Button, ProgressViewIOSComponent, Text, View } from "react-native";
import { TextInput } from "react-native";
import ButtonTask from "../components/buttontask"

const Screen6 = () => {
     /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(valor inicial);
     */
    console.log("llista pintar")
    const [todoList, changeTodoList] = useState([] as string[]);
    const [todo, saveTodo] = useState("");

    const addToList=()=>{
      changeTodoList([...todoList, todo])
    }

    /**Exercise: 
     * Adapt this Screen to allow user to delete a specific todo from the list
     */
    const removeFromList=(x:number)=>{
      console.log(x);
      changeTodoList([...todoList.splice(position,1)])
      changeTodoList([...todoList])

    }

    return (
    <View style={{padding: 10}}>
            <TextInput
        style={{ height: 40 }}
        placeholder="Escriu element de la llista"
        value={todo}
        onChangeText={text => { saveTodo(text) }}
      />
      <Button title="add" onPress={addToList} />

    {todoList.map((element, position)=>{ return <ButtonTask key={position} onPress={()=>{removeFromList(position)}} color="green" text={element} pos={position}/> })
    }
    
    </View>

    
    )
    
}
export default Screen6; 