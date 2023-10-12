import React, { useEffect } from "react";
import { View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function Authentication({ navigation }) {
  useEffect(() => {
    handleAuthentication();
  });

  /**
   * Ask for fingerprint or PIN authenticaction
   * If prompt is exited, show prompt again
   */
  const handleAuthentication = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to access TODO list",
    });
    if (result.success) {
      navigation.replace("Todo");
    } else {
      handleAuthentication();
    }
  };

  return <View></View>;
}
