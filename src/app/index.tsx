import {View, StyleSheet,Text,TouchableOpacity,FlatList,Modal,Button} from 'react-native'
import React,{useState} from 'react'
import colors from '@/colors'
import { AntDesign } from '@expo/vector-icons'
import tempData from "@/tempData"
import TodoList from "@/components/table/TodoList"
import AddListModal from '@/components/modals/AddListModal'

type TodoItem = {
    name: string;
    color: string;
    todos: {
      title: string;
      completed: boolean;
    }[];
  };
  

export default function App(){
    const [addTodoVisible, setAddTodoVisible] = useState(false);

    const toggleAddTodoModal = () => {
        setAddTodoVisible(!addTodoVisible);
    };

    const renderList = ({ item }: { item: TodoItem }) => {
        return <TodoList list={item} />;
      };
      
    return(
        <View style ={styles.container}>
                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={addTodoVisible}
                    onRequestClose={toggleAddTodoModal}
                    >
                    
                    <AddListModal closeModal={() => toggleAddTodoModal()} />

                    </Modal>
            <View style={{flexDirection: "row"}}>
                <View style={styles.divider} />
                <Text style ={styles.title}>
                    Todo <Text style = {{fontWeight: "300", color: colors.blue}}> Lists </Text>
                </Text>
                <View style={styles.divider} />
            </View>


            <View style = {{marginVertical: 48}}>
                <TouchableOpacity style={styles.addList} onPress={() => toggleAddTodoModal()}>
                    <AntDesign name ="plus" size={16} color={colors.blue} />
                </TouchableOpacity>

                <Text style={styles.add}> Add List</Text>
            </View>

            <View style={{height:275 , paddingLeft: 32}}>
                <FlatList
                    data ={tempData}
                    keyExtractor={item => item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderList}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    divider: {
        backgroundColor: colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: "center",

    },
    title:{
        fontSize: 28,
        fontWeight:"800",
        color: colors.black,
        paddingHorizontal: 64,

    },
    addList:{
        borderWidth: 2,
        borderColor: colors.lightBlue,
        borderRadius:4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",

    },
    add:{
        color: colors.blue,
        fontWeight: "600",
        fontSize: 14,
        marginTop:8

    }



})