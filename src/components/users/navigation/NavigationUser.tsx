import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersList from "../list/UsersList";
import AddUser from "../add/AddUser";
import {MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useMutation, useQuery} from "@apollo/client";
import {CreateUser, GetAllUsers, RemoveUser} from "../../../API/user/graphql";
import {useEffect, useState} from "react";
import {ActivityIndicator, Text, View} from "react-native";

const Tab = createBottomTabNavigator();

const NavigationUser = () => {

       const { data, loading, error } = useQuery(GetAllUsers)
       const [list, setList] = useState(data ? data.users : [])
       const [removeUser] = useMutation(RemoveUser)
     const [createUser] = useMutation(CreateUser)

    useEffect(() => {
        setList(data.users)
    }, data)

    const deleteUser = (id: any) => {
        removeUser({
            variables: {userId: id}
        })
        setList(() => {
            return list.filter( ({userId}: any) => userId != id)
        })
    }

    const create = (email: string, password: string) => {
        createUser({
            variables: {email, password}
        })
        setList(() => {
            return [
                { email: email, password: password},
                ...list
            ]
        })
    }

    if (!data) return <ActivityIndicator />

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="List of users"
                component={() => <UsersList data={list} removeUser={deleteUser}/>}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons size={30} name="list" color={ focused ? 'green' : 'black'}
                    />
                }}/>
            <Tab.Screen
                name="Add user"
                component={() => <AddUser create={create}/>}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons size={30} name="add" color={ focused ? 'green' : 'black'}
                    />
                }}/>
        </Tab.Navigator>
    );
};

export default NavigationUser