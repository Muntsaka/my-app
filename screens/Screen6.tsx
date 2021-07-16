import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";
import ButtonTask from "../components/buttontask"

const Screen6 = () => {
     /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(valor inicial);
     */

    /*Estat de la llista d'elements */
    const [todoList, changeTodoList] = useState([] as {text:string, isComplete:boolean}[]);
    //const [todoList, changeTodoList] = useState([] as string[]);

    /*Estat del text del TextInput*/
    const [todo, saveTodo] = useState("");
    /* Variable count que és un Estat i representa el número de cops que s'ha eliminat una task + mètode per actualitzar el valor setCount*/
    const [count, setCount] = useState(0)

    const addToList=()=>{

      //Teoria arrays spread
      //const array1 = ["a", "b", "c"] 
      //const copiadelarray1 = ["1","2", "3", ...array1, "d", "e", "f"]; 
      
      changeTodoList([...todoList, {text:todo, isComplete:false}])
      
      //changeTodoList([...todoList, todo])
    }

    const removeFromList=(pos:number)=>{  
      /*TODO  Aquí falta UNA linea */    
      setCount(count+1)
      todoList.splice(pos,1)
      changeTodoList([...todoList])
    }

    const strikeText=(pos:number)=>{  
      setCount(count+1)  
      changeTodoList([{...todoList[pos], isComplete:true}])
    }

    
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

      
      {/*todoList.map((element, position)=>{ 
        return <ButtonTask key={position} onPress={()=>{removeFromList(position)}} color="green" text={element} pos={position} isComplete={false}/>
      })*/}  

      {todoList.map((element, position)=>{ 
        return <ButtonTask key={position} onPress={()=>{strikeText(position)}} color="green" text={element.text} pos={position} isComplete={element.isComplete}/> 
        })}  
    
    
    </View>

    
    )
    
}
export default Screen6; 
