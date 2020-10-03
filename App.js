import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/screens/Home";
import Kategori from "./app/screens/Kategori";
import Kasir from "./app/screens/Kasir";
import Checkout from "./app/screens/Checkout";
import InputBarang from "./app/screens/InputBarang";
import InputPelanggan from "./app/screens/InputPelanggan";
import SuccessScreen from "./app/screens/SuccessScreen";

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
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen
            name="InputBarang"
            component={InputBarang}
            options={{ title: "Input Barang" }}
          />
          <Stack.Screen name="Kategori" component={Kategori} />
          <Stack.Screen
            name="InputPelanggan"
            component={InputPelanggan}
            options={{ title: "Input Pelanggan" }}
          />
          <Stack.Screen
            name="SucceesScreen"
            component={SuccessScreen}
            options={{ title: "Success" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
