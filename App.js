import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import Home from "./app/screens/HomeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return <Home />;
  }
}
