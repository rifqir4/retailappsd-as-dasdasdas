import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
const Success = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={props.img}
                />
            </View>
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.titleButton}>Kembali</Text>
            </View>
        </View>
    );
};

export default Success;

const styles = StyleSheet.create({
    logo: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        color: "#323232",
        fontSize: 20,
        fontFamily: "opensans-regular",
        width: "100%",
        padding: 10
    },
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#2A6FA1",
        borderRadius: 5,
        flex: 0,
        flexDirection: "row",
        padding: 10,
        width: "100 %"
    },
    titleButton: {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "opensans-regular",
        textAlign: "center"
    }
});