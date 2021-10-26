import {Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

// @ts-ignore
const Item = ({ item, removeItem }) => {

    const img = require('../../../../../assets/images/noImage.png')
    const [modalVisible, setModalVisible] = useState(false)

    const openModel = () => {
        setModalVisible(!modalVisible)
    }


    const closeModal = () => {
        setModalVisible(!modalVisible)
    }

    return(
        <View style={styles.list}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <View style={styles.modal}>
                    <View style={styles.form}>
                        <Text><Text style={styles.description}>Description: </Text>{item.description ? item.description : 'none'}</Text>
                        <Text><Text style={styles.description}>Status: </Text>{item.status ? item.name : 'none'}</Text>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={closeModal}>
                            <Text style={styles.textClose}>close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Image style={styles.image} source={item.image ? item.image : img}/>
            <Text> {item.title}</Text>
            <TouchableOpacity
                style={styles.details}
                onPress={openModel}>
                <Text> Details </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.delete}
                onPress={() => removeItem(item.itemId)}>
                <Text> Delete </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    list: {
        width: 300,
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderColor: '#142a0b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    delete: {
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 2,
        margin: 3,
        backgroundColor: 'rgba(255,255,255,0.42)',
        borderRadius: 5,
        borderColor: '#a32a47',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.42)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 0.3,
        width: 400,
        borderStyle: 'solid',
        justifyContent: 'space-around',
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 5,
        borderColor: '#0c29d4',
    },
    buttonClose: {
        margin: 10,
        padding: 5,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#d24848',
        backgroundColor: 'rgba(243,112,112,0.42)',
    },
    details: {
        borderStyle: 'solid',
        borderWidth: 5,
        padding: 2,
        margin: 3,
        backgroundColor: 'rgba(255,255,255,0.42)',
        borderRadius: 5,
        borderColor: '#48aed2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },
    textClose: {
        textAlign: 'center',
        color: '#d24848',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default Item