import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import {styles} from "@/components/todo/styles";
import { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from '@/colors'


type Todo = {
  title: string;
  completed: boolean;
};

type Props = {
  list: {
    name: string;
    color: string;
    todos: Todo[];
  };
  closeModal: () => void;
};

export default function TodoModal({ list, closeModal}: Props) {

  const renderTodo = ({ item }: { item: Todo }) => {
      return (
          <View style={styles.todoContainer}>
              <TouchableOpacity>
                    <Ionicons 
                    name={item.completed ? "square" : "square-outline" } 
                    size={24} 
                    color={colors.gray} 
                    style={{width:32}} />
              </TouchableOpacity>

              <Text style={[styles.todo, {textDecorationLine:item.completed ? "line-through": "none", color: item.completed ? colors.gray : colors.black}]}>{item.title}</Text>
          </View>
      );
  };

  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodos] = useState(list.todos);
  
  const completedCount = todos.filter(todo => todo.completed).length;
  const taskCount = todos.length;

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            style={{position:"absolute", top: 64,  right: 32 , zIndex:10}} 
            onPress={closeModal}
            >
                <AntDesign name="close" size ={24} color={colors.black} />
            </TouchableOpacity>

            <View style={[styles.section,styles.header, {borderBottomColor: color} ]}>
                <View>
                    <Text style={styles.title}>{name} </Text>
                    <Text style={styles.taskCount}>
                        {completedCount} of {taskCount} tasks
                    </Text>
                </View>
            </View>

            <View style={[styles.section, {flex: 3}]}>
                <FlatList 
                data={todos} 
                renderItem={renderTodo} 
                keyExtractor={item => item.title} 
                contentContainerStyle={{paddingHorizontal: 32,  paddingVertical: 64 }}
                showsVerticalScrollIndicator={false}
                />
            </View>

            <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="padding">
                <TextInput style={[styles.input, {borderColor: color}]} />
                <TouchableOpacity style ={[styles.addTodo, {backgroundColor: color}]}>
                    <AntDesign name="plus"  size ={16} color={colors.white}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

