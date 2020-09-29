import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Success from "../components/Success";

export default function InputBarangSuccess({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.info}>
                <Image source={require("../../assets/images/giveaway.png")} />
            </View>
            <View style={styles.menus}>
                <Success
                    title="Data Ditambahkan!"
                />

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
    menus: {
        width: "100%",
        padding: 20,
    },
});