import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import {styles} from "@/components/table/styles";
import TodoModal from "../todo/TodoModal";




type Props = {
  list: {
    name: string;
    color: string;
    todos: {
      title: string;
      completed: boolean;
    }[];
  };
};

export default function TodoList({ list }: Props) {

  const [showListVisible, setShowListVisible] = useState(false);

  const toggleListModal = () => {
    setShowListVisible(!showListVisible);
  };

  const completedCount = list.todos.filter(todo => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  return (
    <View>
      <Modal animationType="slide"
        visible={showListVisible}
        onRequestClose={toggleListModal}
      >
        <TodoModal list={list} closeModal={() => toggleListModal()}/>
      </Modal>
      <TouchableOpacity style={[styles.listContainer, { backgroundColor: list.color }]} 
      onPress={toggleListModal}
      >
        <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
        </Text>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>


  );
}
