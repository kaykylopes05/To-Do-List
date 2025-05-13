import React, {useState} from "react";
import {View,Text,KeyboardAvoidingView,TouchableOpacity,TextInput} from "react-native";
import {styles} from "@/components/modals/styles";
import { AntDesign } from "@expo/vector-icons";
import colors from '@/colors'
import tempData from "@/tempData";



type Props = {
    closeModal: () => void;
  };



export default function AddListModal({ closeModal }: Props){
    const backgroundColors = ["#5CD859","#24A6D9","#595BD9","#8022D9","#D159D8","#D85963","#D88559"];
    
    const [name, setName] = useState("");
    const [color, setColor] = useState(backgroundColors[0]);

    const createTodo = () => {
      const newList = {
        name,
        color,
        todos: [],
      };
    
      tempData.push(newList); 
    
      setName("");
      closeModal();        
    };
    


    const renderColors = () => {
        return backgroundColors.map((colorOption) => (
          <TouchableOpacity
            key={colorOption}
            style={[styles.colorSelect, { backgroundColor: colorOption }]}
            onPress={() => setColor(colorOption)}
          />
        ));
      };
      

    return(
        <KeyboardAvoidingView style={styles.container} behavior = "padding">
            <TouchableOpacity onPress = {closeModal} style= {{position: "absolute", top:64, right:32,}}>
                <AntDesign name="close" size={24} color={colors.black} />
            </TouchableOpacity>

            <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                <Text style={styles.title}> Create Todo List</Text>


                <TextInput style={styles.input}
                 placeholder="List Name?"
                 onChangeText={setName}
                 value={name}
                 />

                 <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 12}}>
                    {renderColors()}
                 </View>

                <TouchableOpacity style={[styles.create, {backgroundColor: color}]} 
                onPress={(createTodo)}
                >
                    <Text style={{color:colors.white, fontWeight: "600"}}>Create!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
}