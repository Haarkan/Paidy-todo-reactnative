import React from "react";
import { View } from "react-native";
import { FAB, TextInput } from "react-native-paper";

export default function FooterActions({
  isUpdateMode,
  onCancelEdit,
  newTodoText,
  setNewTodoText,
  handleUpdateTodo,
  handleAddTodo,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      {isUpdateMode && (
        <FAB
          style={{ margin: 16, alignSelf: "flex-end" }}
          icon="cancel"
          onPress={onCancelEdit}
        />
      )}

      <TextInput
        testID="todotext"
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
        }}
        placeholder="Enter TODO text"
        value={newTodoText}
        onChangeText={(text) => setNewTodoText(text)}
      />

      <FAB
        style={{ margin: 16, alignSelf: "flex-end" }}
        icon={isUpdateMode ? "check" : "plus"}
        testID="addupdate"
        onPress={isUpdateMode ? handleUpdateTodo : handleAddTodo}
      />
    </View>
  );
}
