import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "./screens/Authentication";
import Todo from "./screens/Todo";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

const stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="Authentication"
              component={Authentication}
              options={() => ({
                title: "ToDo List - Authentication",
              })}
            />
            <stack.Screen
              name="Todo"
              component={Todo}
              options={() => ({
                title: "ToDo List",
                headerLeft: () => {
                  return null;
                },
              })}
            />
          </stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
