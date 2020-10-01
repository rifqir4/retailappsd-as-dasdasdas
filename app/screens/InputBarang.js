import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Item = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#E8F5FF",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <View>
        <Text>Aqua Galon</Text>
        <Text style={{ color: "#6EDB5A" }}>{"\u2B24"} Grosir</Text>
      </View>
      <Text style={{ fontWeight: "bold" }}>Rp. 25.000</Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="edit"
          size={20}
          color="black"
          style={{
            backgroundColor: "#9f9",
            borderRadius: 5,
            padding: 3,
            marginRight: 10,
          }}
        />
        <Feather
          name="trash"
          size={20}
          color="black"
          style={{ backgroundColor: "#f99", borderRadius: 5, padding: 3 }}
        />
      </View>
    </View>
  );
};

const InputBarang = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="search" size={20} />
        </Text>
        <Text
          style={{
            padding: 10,
            backgroundColor: "#9f9",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Tambah Barang Baru <Feather name="plus" size={20} />
        </Text>
      </View>

      <ScrollView>
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
};

export default InputBarang;
