import React from "react";
import { Text } from "react-native";
import { Card, IconButton } from "react-native-paper";

export default function TodoItem({
  item,
  isUpdateMode,
  onEditClicked,
  handleDeleteTodo,
}) {
  return (
    <Card
      key={item.id}
      style={{
        margin: 10,
        padding: 10,
      }}
    >
      <Card.Content>
        <Text
          style={{
            flex: 8,
            fontSize: 20,
          }}
        >
          {item.text}
        </Text>
      </Card.Content>
      <Card.Actions>
        {!isUpdateMode && (
          <>
            <IconButton
              testID="update"
              icon="pencil"
              size={20}
              onPress={() => onEditClicked(item.id)}
            />
            <IconButton
              testID="delete"
              icon="delete"
              size={20}
              onPress={() => handleDeleteTodo(item.id)}
            />
          </>
        )}
      </Card.Actions>
    </Card>
  );
}
