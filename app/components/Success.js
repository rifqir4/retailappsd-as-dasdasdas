import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
const Success = (props) => {
    return (
        <TouchableOpacity onPress={props.screen}>

            <View style={styles.logo}>
                <Image
                    source={props.img}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                    }}
                />
            </View>
            <View style={{ paddingLeft: 25, flex: 1 }}>
                <Text style={styles.title}>{props.title}</Text>
            </View>

        </TouchableOpacity>
    );
};

export default Success;

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    logo: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        margin: 0,
        fontSize: 24,
        fontWeight: "bold",
        color: "#323232",
        fontFamily: "opensans-regular",
    },
});