import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";
import ButtonTask from "../components/buttontask"

const Screen6 = () => {
     /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(valor inicial);
     */
    console.log("llista pintar")
    const [todoList, changeTodoList] = useState([""]);
    const [todo, saveTodo] = useState("");

    const addToList=()=>{
      changeTodoList([...todoList, todo])
    }

    /**Exercise: 
     * Adapt this Screen to allow user to delete a specific todo from the list
     */
    const removeFromList=()=>{

      changeTodoList([...todoList.slice(0,-1)])

    }

    return (
    <View style={{padding: 10}}>
            <TextInput
        style={{height: 40}}
        placeholder="Escriu element de la llista"
        onChangeText={text =>{saveTodo(text)}}
      />
      <Button title="add" onPress={addToList} />
    {todoList.map((element, position)=>{ return <ButtonTask color="green" text="Delete" /> }
    </View>
    
    )
    
}

export default Screen6; 