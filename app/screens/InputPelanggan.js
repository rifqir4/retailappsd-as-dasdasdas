import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import {
    Alert,
    Modal,
    TouchableHighlight,
} from "react-native";
import { Picker } from '@react-native-community/picker';

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
                <Text style={{ fontSize: 18, paddingBottom: 10 }}>Putri Harviana</Text>
                <Text style={{ fontSize: 16, paddingBottom: 3 }}>Jl. Akik 10 Tlogomas Malang</Text>
                <Text style={{ fontSize: 16 }}>0822-341-681-53</Text>
            </View>

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

const InputPelanggan = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, onChangeText] = React.useState('Useless Placeholder');
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
                            <View style={{ paddingBottom: 20 }}>
                                <Text style={styles.inputText}>Nama Pembeli</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 2 }}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                />
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Text style={styles.inputText}>Alamat</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 2 }}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                />
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Text style={styles.inputText}>Keterangan</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 2 }}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                />
                            </View>
                            <View style={{ paddingBottom: 100 }}>
                                <Text style={styles.inputText}>Nomer Telfon</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 2 }}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                />
                            </View>

                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between", paddingTop: 90
                            }}>

                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Kembali</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#70CC61" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        navigation.navigate("PelangganSuccess");
                                    }}
                                >
                                    <Text style={styles.textStyle}>Tambah</Text>
                                </TouchableHighlight>

                            </View>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
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
                        Tambah Data Pelanggan <Feather name="plus" size={20} />
                    </Text>
                </TouchableHighlight>
            </View>
            <ScrollView>
                <Item />
                <Item />
            </ScrollView>
        </View >
    );
};

export default InputPelanggan;

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
        width: "100%",
        height: "100%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "right",
        borderRadius: 20,
        padding: 10,
        flexDirection: "row"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    inputText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#323232",
        fontFamily: "opensans-regular"
    },
    openButton: {
        backgroundColor: "#9f9",
        borderRadius: 10,
        flexDirection: "row",
    }
});