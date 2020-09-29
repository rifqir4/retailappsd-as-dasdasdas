import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/screens/Home";
import Kategori from "./app/screens/Kategori";
import Kasir from "./app/screens/Kasir";
import InputBarangSuccess from "./app/screens/InputBarangSuccess";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Kasir"
            component={Kasir}
            options={{ title: "Keranjang Belanja" }}
          />
          <Stack.Screen name="InputBarangSuccess" component={InputBarangSuccess} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
