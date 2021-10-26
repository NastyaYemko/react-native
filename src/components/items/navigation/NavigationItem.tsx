import * as React from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ItemsList from "../list/ItemsList";
import AddItem from "../add/AddItem";
import {ActivityIndicator, Text} from "react-native";
import {useMutation, useQuery} from "@apollo/client";
import {CreateItem, GetAllItems, RemoveItem} from "../../../API/item/graphql";
import {useEffect, useState} from "react";

const Tab = createBottomTabNavigator();

const NavigationItem = () => {
     const [createItem] = useMutation(CreateItem)
    const { data, loading, error } = useQuery(GetAllItems)
    console.log(data.items.length)
    const [list, setList] = useState(data ? data.items : [])
    const [removeItem] = useMutation(RemoveItem)

    useEffect(() => {
        setList(data.items)
    },data)
    const create = (title: string, description: string) => {
            createItem({
                variables: {title, description}
            })
        setList(() => {
            return [
                { title: title, description: description},
                ...list
            ]
        })
    }
    const deleteItem = (id: any) => {
        removeItem({
            variables: {itemId: id}
        })
        setList(() => {
            return list.filter( ({itemId}: any) => itemId != id)
        })
    }

    if (!data) return <ActivityIndicator />

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="List of items"
                component={() => <ItemsList data={list} removeItem={deleteItem}/>}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons size={30} name="list" color={ focused ? 'green' : 'black'}
                    />
                }}/>
            <Tab.Screen
                name="Add item"
                component={() => <AddItem create={create}/>}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons size={30} name="add" color={ focused ? 'green' : 'black'}
                    />
                }}/>
        </Tab.Navigator>
    );
};

export default NavigationItem