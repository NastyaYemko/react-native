import React, {useEffect, useState} from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {useMutation, useQuery} from '@apollo/client'
// @ts-ignore
import styled from 'styled-components/native'

import {CreateItem} from '../../../API/item/graphql'
import ImagePicker from "../../upload/ImagePicker";

const AddItem = ({ create }: any) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')



    const createItem = () => {
        setTitle('');
        setDescription('');
        setImage(''),
        create(title, description)
    }
    return(
        <SafeAreaView style={styles.block}>
            <ImagePicker setImage={setImage} image={image}/>
            <TextInput
                style={styles.container}
                editable = {true}
                onChangeText = {setTitle}
                value = {title}
                placeholder='title'
            />
            <TextInput
                style={styles.container}
                editable = {true}
                onChangeText = {setDescription}
                value = {description}
                placeholder='description'
            />
            <TouchableOpacity
                style={styles.add}
                onPress={createItem}>
                <Text style={styles.text}> Add </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 5,
        margin: 10,
        fontSize: 20,
        borderRadius: 7,
        width: 200,
        borderColor: '#e8b515',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    block: {
        flex: 1,
        backgroundColor: '#a1c989',
        alignItems: 'center',
    },
    add: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#21440b',
        padding: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.42)',
    },
    text: {
        fontSize: 20
    },
});


export default AddItem
