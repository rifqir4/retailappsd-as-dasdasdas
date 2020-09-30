import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Success from "../components/Success";
import {
    Alert,
    Modal,
    TouchableHighlight,
} from "react-native";

export default function InputBarangSuccess({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.info}>
                <Image source={require("../../assets/images/welcome.png")} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
                    <Success title="Berhasil Ditambahkan!"></Success>
                </TouchableHighlight>
            </View>
        </View>
    );
    // return (
    //     <View style={styles.container}>
    //         <StatusBar style="auto" />
    //         <View style={styles.info}>
    //             <Image source={require("../../assets/images/welcome.png")} />

    //             <Success
    //                 title="Berhasil Ditambahkan!"
    //             />
    //         </View>

    //     </View>
    // );
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
        alignItems: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});