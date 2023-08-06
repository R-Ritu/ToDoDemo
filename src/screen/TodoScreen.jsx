import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TodoScreen = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), title: task.trim(), completed: false },
      ]);
      setTask('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.todoItem,
        { backgroundColor: item.completed ? '#eee' : 'transparent' },
      ]}
      onPress={() => handleToggleTodo(item.id)}
      onLongPress={() => handleDeleteTodo(item.id)}
    >
      <Text style={styles.todoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholder="Add a new task..."
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TodoScreen;
