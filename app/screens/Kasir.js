import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Kasir = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          backgroundColor: "#2A6FA1",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#77ACD1",
                borderRadius: 10,
                marginRight: 20,
              }}
            >
              <Feather name="map-pin" size={20} color="white" />
            </View>
            <View style={{ justifyContent: "center", paddingRight: 20 }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Alamat</Text>
              <Text style={{ color: "#fff" }}>Jalan Jalan No 8</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#77ACD1",
                borderRadius: 10,
                marginRight: 20,
              }}
            >
              <Feather name="info" size={20} color="white" />
            </View>
            <View style={{ justifyContent: "center", paddingRight: 20 }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Keterangan
              </Text>
              <Text style={{ color: "#fff" }}>Pagar Hitam</Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E3E1E1",
              borderRadius: 10,
            }}
          >
            <Feather name="edit" size={20} color="black" />
          </View>
        </View>
      </View>

      <View
        style={{ width: "100%", alignItems: "flex-end", marginVertical: 10 }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "#6EEB5A",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ paddingRight: 5 }}>Tambah Barang Baru</Text>
          <Feather name="plus" size={20} color="black" />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View>
            <Text>Aqua Galon</Text>
            <Text>{"\u2B24"} Grosir</Text>
          </View>
          <Text>Rp. 25.000</Text>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="plus"
              size={20}
              color="black"
              style={{ backgroundColor: "#fdd", borderRadius: 5, padding: 3 }}
            />
            <Text
              style={{
                backgroundColor: "#ddd",
                padding: 5,
                marginHorizontal: 5,
              }}
            >
              23
            </Text>
            <Feather
              name="minus"
              size={20}
              color="black"
              style={{ backgroundColor: "#dfd", borderRadius: 5, padding: 3 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <View>
            <Text>Aqua Galon</Text>
            <Text>{"\u2B24"} Grosir</Text>
          </View>
          <Text>Rp. 25.000</Text>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="plus"
              size={20}
              color="black"
              style={{ backgroundColor: "#fdd", borderRadius: 5, padding: 3 }}
            />
            <Text
              style={{
                backgroundColor: "#ddd",
                padding: 5,
                marginHorizontal: 5,
              }}
            >
              23
            </Text>
            <Feather
              name="minus"
              size={20}
              color="black"
              style={{ backgroundColor: "#dfd", borderRadius: 5, padding: 3 }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Total: </Text>
          <Text>Rp. 50.000</Text>
        </View>
        <View>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              padding: 10,
              backgroundColor: "#6EEB5A",
            }}
          >
            <Feather name="shopping-cart" size={20} color="black" />
            <Text>Selesaikan Pembelanjaan</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Kasir;
