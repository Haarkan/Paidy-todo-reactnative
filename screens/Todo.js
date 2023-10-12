import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { List } from "react-native-paper";
import FooterActions from "../components/FooterActions";
import TodoItem from "../components/TodoItem";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const [newTodoText, setNewTodoText] = useState("");
  const [isUpdateMode, setUpdateMode] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const handleAddTodo = () => {
    store.dispatch({
      type: "todos/todoAdded",
      payload: {
        id: !todos || todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        text: newTodoText,
      },
    });
    setNewTodoText("");
  };

  const handleUpdateTodo = () => {
    store.dispatch({
      type: "todos/todoUpdated",
      payload: {
        id: updateId,
        text: newTodoText,
      },
    });
    onCancelEdit();
  };

  const handleDeleteTodo = (id) => {
    store.dispatch({
      type: "todos/todoDeleted",
      payload: {
        id: id,
      },
    });
  };

  const onEditClicked = (id) => {
    setUpdateMode(!isUpdateMode);
    let todoToEdit = todos.find((todo) => todo.id === id);
    setNewTodoText(todoToEdit.text);
    setUpdateId(id);
  };
  const onCancelEdit = () => {
    setUpdateMode(false);
    setNewTodoText("");
    setUpdateId(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <List.Section style={{ flex: 1 }}>
        <ScrollView>
          {todos &&
            todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                handleDeleteTodo={handleDeleteTodo}
                isUpdateMode={isUpdateMode}
                onEditClicked={onEditClicked}
              ></TodoItem>
            ))}
        </ScrollView>
      </List.Section>

      <FooterActions
        handleAddTodo={handleAddTodo}
        handleUpdateTodo={handleUpdateTodo}
        isUpdateMode={isUpdateMode}
        newTodoText={newTodoText}
        onCancelEdit={onCancelEdit}
        setNewTodoText={setNewTodoText}
      ></FooterActions>
    </View>
  );
}
