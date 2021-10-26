import React, {useEffect, useState} from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image, Modal, Pressable,
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


const AddUser = ({ create }: any) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        setEmail('');
        setPassword('');
        // @ts-ignore
        create(email, password)
    }

    return(
        <SafeAreaView style={styles.block}>

            <TextInput
                style={styles.container}
                editable = {true}
                onChangeText = {setEmail}
                value = {email}
                placeholder='email'
            />
            <TextInput
                style={styles.container}
                editable = {true}
                onChangeText = {setPassword}
                value = {password}
                placeholder='password'
            />
            <TouchableOpacity
                style={styles.add}
                onPress={createUser}>
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


export default AddUser
