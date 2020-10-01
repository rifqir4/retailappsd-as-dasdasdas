import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Success from "../components/Success";

export default function InputBarangSuccess({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.info}>
                <Image source={require("../../assets/images/welcome.png")} />

                <Success
                    title="Berhasil Ditambahkan!"
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("InputBarang");
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.titleButton}>Kembali</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    info: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#2A6FA1",
        borderRadius: 5,
        flex: 0,
        flexDirection: "row",
        padding: 10,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    titleButton: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "opensans-regular",
        width: "100%",
        padding: 5,
        alignItems: "center",
        textAlign: "center"
    }
});