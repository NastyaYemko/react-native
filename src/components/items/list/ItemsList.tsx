import React, {useState} from 'react'
import {
    ActivityIndicator,
    FlatList, SafeAreaView,
    StyleSheet, Text, View,
} from "react-native";
import {useMutation, useQuery} from '@apollo/client'
// @ts-ignore
import {GetAllItems, RemoveItem} from "../../../API/item/graphql";
import Item from "./item/Item";

const ItemsList = ({ data, removeItem }: any) => {

    if (!data) return <ActivityIndicator />

    return(
        <SafeAreaView style={styles.back}>
            <View style={styles.container}>
        <FlatList data={data} renderItem={({ item }) => (
            <Item item={item} removeItem={removeItem}/>
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


export default ItemsList
