import React from 'react'
import {
    ActivityIndicator, FlatList,
    SafeAreaView,
    StyleSheet, Text, View,
} from "react-native";
import {useQuery} from '@apollo/client'
// @ts-ignore
import styled from 'styled-components/native'
import User from "./user/User";
import {GetAllUsers} from "../../../API/user/graphql";

const UsersList = ({data, removeUser}: any) => {

    if (!data) return <ActivityIndicator />

    return(
        <SafeAreaView style={styles.back}>
            <View style={styles.container}>
                <FlatList data={data} renderItem={({ item }) => (
                    <User user={item} removeUser={removeUser} />
                )}/>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        flex: 1,
        backgroundColor: '#a1c989',
    }
});


export default UsersList
